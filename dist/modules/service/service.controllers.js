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
const Services_entites_1 = require("../../entites/Services.entites");
const datasource_1 = require("../../datasource/datasource");
const serviceRepository = datasource_1.AppDataSource.getRepository(Services_entites_1.Service);
class ServiceController {
    createService(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const newService = serviceRepository.create({ name });
                yield serviceRepository.save(newService);
                res.json({ message: "Service created successfully" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
    getServices(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const services = yield serviceRepository.find();
                res.json(services);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
}
exports.default = new ServiceController();
//# sourceMappingURL=service.controllers.js.map