import { User } from "../../entites/User.entites";
import { NextFunction, Request, Response, response } from "express";
import { AppDataSource } from "../../datasource/datasource";
const userRepo = AppDataSource.getRepository(User);

class UserControllers {
  async createUser(req: any, res: Response) {
    const { firstName, lastName, age, email, password } = req.body;
    const newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.age = age;
    newUser.email = email;
    newUser.password = password;
    await userRepo.save(newUser);
    res.json({ message: "User created successfully" });
  }

  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await userRepo.findOne({
        where: { email: req.body.email },
      }); // Assuming you're using TypeORM's findOne method
      if (user && user.password === password) {
        res.json({ message: "Login Successful" });
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

export default new UserControllers();
