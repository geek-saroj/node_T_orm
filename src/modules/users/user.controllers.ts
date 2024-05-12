import { User } from "../../entites/User.entites";
import { NextFunction, Request, Response, response } from "express";
import { AppDataSource } from "../../datasource/datasource";
import jwt from "jsonwebtoken";
import { generateOtp, setCacheOtp, getCacheOtp } from "../../function/cache";
import nodemailer from "nodemailer";
const userRepo = AppDataSource.getRepository(User);
let newUser: User;
class UserControllers {
  async createUser(req: any, res: Response) {
    try {
      const { email } = req.body;

      const checkemail = req.body.email;

      const user = await userRepo.findOne({
        where: { email: checkemail },
      });

      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Generate OTP
      const otp = generateOtp();
     

      setCacheOtp(email, otp, "verifyEmail");
       await sendOtpByEmail(email, otp as string);
      console.log("Generated OTP:", otp);

      res.status(200).json({ message: "OTP generated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async verifyOTP(req: any, res: Response) {
    try {
      const { email, otp } = req.body;


      const cachedOtp = getCacheOtp(email, "verifyEmail");
      if (!cachedOtp || otp !== cachedOtp) {
        return res.status(400).json({ message: "Invalid or expired OTP" });
      }

      // If OTP is valid, save the user
      // You can move this part to createUser method if you want OTP verification during registration
      const { firstName, lastName, age, password } = req.body;
      // console.log("req.body is", req.body);
      const newUser = new User();
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.age = age;
      newUser.email = email;
      newUser.password = password;

      await userRepo.save(newUser);

      res.status(200).json({ message: "User created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    // console.log("req.body is", req.body);
    // console.log("email is", req.body.email);
    try {
      const user = await userRepo.findOne({
        where: { email: req.body.email },
      });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      // console.log("user is :", user);

      const jwtdata = {
        user: {
          email: user?.email,
        },
      };

      // console.log("jwtdata is :", jwtdata);
      const jwtToken = jwt.sign(jwtdata, "secretkey", {
        expiresIn: "1h",
      });

      if (await user.validatePassword(password)) {
        res.status(200).json({ token: jwtToken });
      } else {
        res.json({ message: "Login Failed" });
      }
    } catch (error) {
      // Handle errors appropriately
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
async function sendOtpByEmail(email: string, otp: string) {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'camylle19@ethereal.email',
        pass: 'XTtNc3NySafTygQeCh'
    }
  });

  // Send email with OTP
  await transporter.sendMail({
    from: 'camylle19@ethereal.email',
    to: email,
    subject: 'OTP Verification',
    text: `Your OTP for email verification is: ${otp}`,
  });
}



export default new UserControllers();
