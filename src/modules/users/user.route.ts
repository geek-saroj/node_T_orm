import upload from "../../config/multarconfig";
import UserControllers from "./user.controllers";
import express from "express";

const authRoute = express.Router({mergeParams: true});

authRoute.post("/register", UserControllers.createUser);
authRoute.post("/verify-otp", UserControllers.verifyOTP);
authRoute.post("/login", UserControllers.loginUser);
authRoute.get("/getone/:id", UserControllers.getUserById);
authRoute.get("/", UserControllers.getAllUsers);
authRoute.get("/mongotest", UserControllers.mongotest);
authRoute.post("/upload", upload.single("file"), UserControllers.uploadExcel);
authRoute.post("/convert", upload.single("file"), UserControllers.convertImageToText);


//getAllUsers





export default authRoute