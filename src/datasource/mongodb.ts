import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGODB_URI || '';
const client = new MongoClient(mongoUri, );

export default client;
