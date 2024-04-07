// ServiceController.ts
import { Request, Response } from 'express';
import { Service } from '../../entites/Services.entites';
import { AppDataSource } from "../../datasource/datasource";


const serviceRepository = AppDataSource.getRepository(Service);

class ServiceController {
  async createService(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const newService = serviceRepository.create({ name });
      await serviceRepository.save(newService);
      res.json({ message: "Service created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getServices(req: Request, res: Response) {
    try {
      const services = await serviceRepository.find();
      res.json(services);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new ServiceController();
