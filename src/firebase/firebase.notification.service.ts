
import { IFirebaseMessage } from '../types/interfaces.type';
import { FirebaseService } from './firebase.service';

class FirebaseNotificationService extends FirebaseService {
  async sendNotification(message: IFirebaseMessage): Promise<any> {
    try {
      const r = await FirebaseNotificationService._firebase.messaging().send(message);
      
      console.log('firebase FCM success: ', r);
    } catch (e) {
      console.log(e);
    }
  }

  async sendNotificationMulticast(): Promise<any> {}
}

export const firebaseNotificationService = new FirebaseNotificationService();
