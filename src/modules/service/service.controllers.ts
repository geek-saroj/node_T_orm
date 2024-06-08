// ServiceController.ts
import { Request, Response } from "express";
import { Service } from "../../entites/Services.entites";
import { AppDataSource } from "../../datasource/datasource";
import { Offering } from "../../entites/Offering.entity";

const offeringRepository = AppDataSource.getRepository(Offering);
const serviceRepository = AppDataSource.getRepository(Service);

class ServiceController {
  async createService(req: Request, res: Response) {
    try {
      const { name ,price } = req.body;
      console.log("req.body is", req.body);
      console.log("name is", name);
      const newService = serviceRepository.create({ name ,price });
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

  async  createMicroservice(req: Request, res: Response) {
    const servicedata = req.body;
    console.log("req.body is", req.body);
    console.log("servicedata is", servicedata);
    try {
      for (const service of servicedata) {
        const newService = offeringRepository.create(service);
        await offeringRepository.save(newService);
      }
      res.status(200).json({ message: 'Services created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating services' });
    }
  }
  
}

export default new ServiceController();
