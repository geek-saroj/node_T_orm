import { Request, Response, NextFunction } from 'express';

export class TanentMiddleware {
    static async decode(req: Request, res: Response, next: NextFunction) {
        try {
            const tenantId = req.headers['x-tenant-id']; 
            if (!tenantId) {
                return res.status(400).send('Tenant ID is required');
            }
            req.tenantId = tenantId as string; 
            next();
        } catch (err) {
            return res.redirect('/login');
        }
    }
}

