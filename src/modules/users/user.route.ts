import UserControllers from "./user.controllers";
import express from "express";

const authRoute = express.Router({mergeParams: true});

authRoute.post("/register", UserControllers.createUser);
authRoute.get("/login", UserControllers.loginUser);




export default authRoute