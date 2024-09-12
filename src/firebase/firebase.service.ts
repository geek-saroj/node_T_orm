import firebase from 'firebase-admin';
import { Config } from '../config/config';

export abstract class FirebaseService {
  protected static _firebase = firebase.initializeApp({
    credential: firebase.credential.cert(Config.firebase),
  });
}
