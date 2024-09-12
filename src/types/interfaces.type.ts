export interface IFirebaseNotification {
    title: string;
    body: string;
  }
export interface IFirebaseMessage {
    notification: IFirebaseNotification;
    token: string;
    data: any;
  }