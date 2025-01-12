import { User } from "../../entites/User.entites";
import { NextFunction, Request, Response, response } from "express";
import { AppDataSource } from "../../datasource/datasource";
import jwt from "jsonwebtoken";
import { generateOtp, setCacheOtp, getCacheOtp } from "../../function/cache";
import nodemailer from "nodemailer";
import { parseExcelFile } from "../../function/parexcelfile";
import Tesseract from 'tesseract.js';
import fs from 'fs';
import client from "../../datasource/mongodb";
const userRepo = AppDataSource.getRepository(User);
let newUser: User;
class UserControllers {
  async createUser(req: any, res: Response) {
    try {
      console.log("req.body is", req.body);
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

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userRepo.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      console.log("id is", id);
      const user = await userRepo.findOneBy({ id: Number(id) });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log("req.body is", req.body);
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
          id: user?.id,
          firstName: user?.firstName,
          lastName: user?.lastName,
          age: user?.age,
        },
      };

      // console.log("jwtdata is :", jwtdata);
      const jwtToken = jwt.sign(jwtdata, "secretkey", {
        expiresIn: "1h",
      });

      if (await user.validatePassword(password)) {
        res.status(200).json({user, jwtToken});
      } else {
        res.json({ message: "Login Failed" });
      }
    } catch (error) {
      // Handle errors appropriately
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async uploadExcel(req: Request, res: Response) {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    try {
      const filePath = req.file.path;
      const data = parseExcelFile(filePath);

      if (!Array.isArray(data) || data.length === 0) {
        return res.status(400).json({ message: "Invalid or empty Excel file" });
      }

      // Assuming the first row contains headers
      const headers = data[0];
      const rows = data.slice(1);

      // Type assertion to ensure headers are strings
      if (!Array.isArray(headers) || headers.length !== 5) {
        return res.status(400).json({ message: "Invalid Excel file format" });
      }

      const batchSize = 1000; // Adjust as needed
      let batch: User[] = [];

      for (const row of rows) {
        // Type assertion to ensure rows are arrays with correct length
        if (!Array.isArray(row) || row.length !== 5) {
          console.warn("Skipping invalid row:", row);
          continue; // Skip invalid rows
        }

        const [firstName, lastName, age, email, password] = row as [
          string,
          string,
          number,
          string,
          string
        ];

        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.age = age;
        user.email = email;
        user.password = password;

        batch.push(user);

        if (batch.length >= batchSize) {
          await userRepo.save(batch);
          batch = [];
        }
      }

      // Save remaining records
      if (batch.length > 0) {
        await userRepo.save(batch);
      }

      res.status(200).json({ message: "Data inserted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async mongotest(req: Request, res: Response, next: NextFunction) {
    try {
      await client.connect();
      const database = client.db('AUTHLOGIN');
      const collection = database.collection('users');
      const data = await collection.find().toArray();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data from MongoDB', error });
    } finally {
      await client.close();
    }
    
  }
  async convertImageToText(req: Request, res: Response, next: NextFunction) {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    console.log("from here ---->");
    console.log("req.file is", req.file);

    try {
      const filePath = req.file.path;

      const { data: { text } } = await Tesseract.recognize(filePath, 'eng', {
        logger: info => console.log(info),
      });

      fs.unlinkSync(filePath); // Clean up the file after processing

      res.status(200).json({ text });
    } catch (error) {
      console.error(error);
      next(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
}

}
async function sendOtpByEmail(email: string, otp: string) {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "camylle19@ethereal.email",
      pass: "XTtNc3NySafTygQeCh",
    },
  });

  // Send email with OTP
  await transporter.sendMail({
    from: "camylle19@ethereal.email",
    to: email,
    subject: "OTP Verification",
    text: `Your OTP for email verification is: ${otp}`,
  });
}

export default new UserControllers();
