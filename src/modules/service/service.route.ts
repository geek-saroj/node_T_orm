// routes.ts
import { Router } from 'express';
import  ServiceController  from './service.controllers';

const servicerouter = Router();

servicerouter.post('/createservice', ServiceController.createService);
servicerouter.get('/getservice', ServiceController.getServices);


export default servicerouter;
