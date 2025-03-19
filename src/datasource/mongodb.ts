import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://geek:iO9BM5glTnULZ3Zb@mern.mghbiad.mongodb.net/mern?retryWrites=true&w=majority&appName=Mern';
const client = new MongoClient(mongoUri, );

export default client;
