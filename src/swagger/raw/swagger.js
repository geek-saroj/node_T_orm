// import { changeResponse, swapQueryAndBody } from "./extraWork.js";
import swaggerAutogen from 'swagger-autogen';

const options = { openapi: '3.0.0' };

const doc = {
  // { ... },
  host: '192.168.1.6:8000',
  basePath: '',
  schemes: ['http', 'https'],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      in: 'header', // can be 'header', 'query' or 'cookie'
      name: 'authorization', // name of the header, query parameter or cookie
      description: 'Some description...',
    },
  },
};

const outputFile = './src/swagger/raw/raw_swagger_output.json';
const endpointsFiles = ['./src/app.ts'];

const swaggerFunc = async () => {
  try {
    const script = await swaggerAutogen(options)(outputFile, endpointsFiles, doc);
  } catch (error) {
    console.log('error', error);
  }
};

swaggerFunc();
