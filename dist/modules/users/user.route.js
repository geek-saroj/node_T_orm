"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controllers_1 = __importDefault(require("./user.controllers"));
const express_1 = __importDefault(require("express"));
const authRoute = express_1.default.Router({ mergeParams: true });
authRoute.post("/register", user_controllers_1.default.createUser);
authRoute.get("/login", user_controllers_1.default.loginUser);
exports.default = authRoute;
//# sourceMappingURL=user.route.js.map