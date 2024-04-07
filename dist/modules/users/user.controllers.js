"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_entites_1 = require("../../entites/User.entites");
const datasource_1 = require("../../datasource/datasource");
const userRepo = datasource_1.AppDataSource.getRepository(User_entites_1.User);
class UserControllers {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, age, email, password } = req.body;
            const newUser = new User_entites_1.User();
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.age = age;
            newUser.email = email;
            newUser.password = password;
            yield userRepo.save(newUser);
            res.json({ message: "User created successfully" });
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const user = yield userRepo.findOne({
                    where: { email: req.body.email },
                }); // Assuming you're using TypeORM's findOne method
                if (user && user.password === password) {
                    res.json({ message: "Login Successful" });
                }
                else {
                    res.json({ message: "Login Failed" });
                }
            }
            catch (error) {
                // Handle errors appropriately
                console.error(error);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
}
exports.default = new UserControllers();
//# sourceMappingURL=user.controllers.js.map