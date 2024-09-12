import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://geek:xHwfHIzli3PTaivV@mern.mghbiad.mongodb.net/AUTHLOGIN?retryWrites=true&w=majority&appName=Mern';
const client = new MongoClient(mongoUri, );

export default client;
