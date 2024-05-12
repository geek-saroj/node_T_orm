import { Router } from 'express';
import { AuthMiddlewares } from '../../middleware/index';
import locationController from './location.controller';

const locationRoute = Router();

// Apply AuthMiddlewares.decode middleware only to the POST route
locationRoute.post('/', AuthMiddlewares.decode, locationController.saveLocation);

// Define other routes
locationRoute.get('/', locationController.getLocations);

export default locationRoute;
