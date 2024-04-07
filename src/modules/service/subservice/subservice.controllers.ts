// SubserviceController.ts
import { Request, Response } from "express";
import { Service } from "../../../entites/Services.entites";
import { Subservice } from "../../../entites/Subservice.entity";
import { AppDataSource } from "../../../datasource/datasource";

const serviceRepository = AppDataSource.getRepository(Service);
const subserviceRepository = AppDataSource.getRepository(Subservice);

class SubserviceController {
  async createSubservice(req: Request, res: Response) {
    try {
      const { name, parentId } = req.body;
      const service = await serviceRepository.findOne({
        where: { id: parentId },
      });
      if (!service) {
        return res.status(400).json({ message: "Parent service not found" });
      }

      const newSubservice = subserviceRepository.create({ name, service });
      await subserviceRepository.save(newSubservice);
      res.json({ message: "Subservice created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getSubservicesByParentId(req: Request, res: Response) {
    try {
      const { parentId } = req.params;
      const id = parseInt(parentId);
      const service = await serviceRepository.findOne({ where: {id} });
      if (!service) {
        return res.status(400).json({ message: "Parent service not found" });
      }
      console.log("service is :", service);
      const subservices = await subserviceRepository.find({
        where: { service },
      });
      res.json(subservices);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new SubserviceController();
