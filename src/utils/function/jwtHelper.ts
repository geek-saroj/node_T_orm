import jwt from 'jsonwebtoken';

const secretKey = 'your-secret-key'; // Replace with a secure secret key

// Function to generate JWT (sign the data)
export const generateJwt = (data: object): string => {
  const token = jwt.sign(data, secretKey, { algorithm: 'HS512' });
  return token;
};

// Function to verify JWT
export const verifyJwt = (token: string): object | string => {
  try {
    return jwt.verify(token, secretKey, { algorithms: ['HS512'] });
  } catch (err) {
    throw new Error('Invalid tokenn');
  }
};
