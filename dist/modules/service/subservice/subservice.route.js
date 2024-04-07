"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subservice_controllers_1 = __importDefault(require("./subservice.controllers"));
const express_1 = __importDefault(require("express"));
const subserviceRoute = express_1.default.Router({ mergeParams: true });
subserviceRoute.post("/createsub", subservice_controllers_1.default.createSubservice);
subserviceRoute.get("/getsub/:parentId", subservice_controllers_1.default.getSubservicesByParentId);
exports.default = subserviceRoute;
//# sourceMappingURL=subservice.route.js.map