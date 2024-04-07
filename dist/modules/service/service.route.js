"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
const express_1 = require("express");
const service_controllers_1 = __importDefault(require("./service.controllers"));
const servicerouter = (0, express_1.Router)();
servicerouter.post('/createservice', service_controllers_1.default.createService);
servicerouter.get('/getservice', service_controllers_1.default.getServices);
exports.default = servicerouter;
//# sourceMappingURL=service.route.js.map