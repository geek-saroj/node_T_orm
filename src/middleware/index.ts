import Jwt from 'jsonwebtoken';
import { User } from '../entites/User.entites';

import { Request, Response, NextFunction } from 'express'; // Ensure you're importing from 'express'

export class AuthMiddlewares {
  static decode(req: Request, res: Response, next: NextFunction) {
    try {
       
     const authString = req.headers.authorization;
     
    
  if (!authString) {  

        console.log('auth string not found');
       
        return res.status(401).json({ message: 'Unauthorized - Missing Authorization Header' }); 
      }
      const [bearer, token] = authString.split(' ');
      if (bearer !== 'Bearer') {
        return next();
      }
      const user = Jwt.verify(token, 'secretkey') as User;
      res.locals.user = user;
      next();
    } catch (err) {
     return res.redirect('/login');
    }
  }
}

