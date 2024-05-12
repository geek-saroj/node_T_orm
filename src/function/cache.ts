import NodeCache from 'node-cache';
const appCache = new NodeCache();

export const generateOtp = (otpLength: number = 4) => {
  let otp = '';
  try {
    for (let i = 0; i < otpLength; i++) {
      const randomNum = Math.floor(Math.random() * 10);
      otp += randomNum;
    }
    return otp;
  } catch (error) {
    console.log(error);
  }
};

export const setCacheOtp = (email: string, value: any, cause: string = 'verifyEmail', ttl: number = 600): void => {
  const otpKey = email + cause;
  appCache.set(otpKey, value, ttl);
};

export const getCacheOtp = (email: string, cause: string): any => {
  const otpKey = email + cause;
  return appCache.get(otpKey);
};
