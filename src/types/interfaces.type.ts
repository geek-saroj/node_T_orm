import * as express from 'express';
export interface IFirebaseNotification {
    title: string;
    body: string;
  }
export interface IFirebaseMessage {
    notification: IFirebaseNotification;
    token: string;
    data: any;
  }


  declare global {
    namespace Express {
        interface Request {
            tenantId?: string; // Add tenantId property to Request
        }
    }
}
