import { Request, Response } from 'express';
import { AppDataSource } from '../../datasource/datasource';
import { Location } from '../../entites/Location.entity';
const locationRepository = AppDataSource.getRepository(Location);

class LocationController {
  async saveLocation(req: Request, res: Response) {
      try {
          // console.log("req.body is",req.body)
      const { latitude, longitude } = req.body;
      const newLocation = locationRepository.create({ latitude, longitude });
      await locationRepository.save(newLocation);
      res.status(200).json({ message: "Location created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getLocations(req: Request, res: Response) {
    try {
      const locations = await locationRepository.find();
      res.json(locations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new LocationController();
