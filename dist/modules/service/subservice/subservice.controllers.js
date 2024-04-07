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
const Services_entites_1 = require("../../../entites/Services.entites");
const Subservice_entity_1 = require("../../../entites/Subservice.entity");
const datasource_1 = require("../../../datasource/datasource");
const serviceRepository = datasource_1.AppDataSource.getRepository(Services_entites_1.Service);
const subserviceRepository = datasource_1.AppDataSource.getRepository(Subservice_entity_1.Subservice);
class SubserviceController {
    createSubservice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, parentId } = req.body;
                const service = yield serviceRepository.findOne({
                    where: { id: parentId },
                });
                if (!service) {
                    return res.status(400).json({ message: "Parent service not found" });
                }
                const newSubservice = subserviceRepository.create({ name, service });
                yield subserviceRepository.save(newSubservice);
                res.json({ message: "Subservice created successfully" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
    getSubservicesByParentId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { parentId } = req.params;
                const id = parseInt(parentId);
                const service = yield serviceRepository.findOne({ where: { id } });
                if (!service) {
                    return res.status(400).json({ message: "Parent service not found" });
                }
                console.log("service is :", service);
                const subservices = yield subserviceRepository.find({
                    where: { service },
                });
                res.json(subservices);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
}
exports.default = new SubserviceController();
//# sourceMappingURL=subservice.controllers.js.map