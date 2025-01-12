import rateLimit from "express-rate-limit";

export default function routeLimiter(
  maxRequest?: number,
  timeFrameInMinute?: number
) {
  return rateLimit({
    windowMs: timeFrameInMinute
      ? timeFrameInMinute * 60 * 1000
      : 10 * 60 * 1000,
    max: maxRequest || 10,
    message: {
      success: false,
      message: `Too many request please hold for next ${
        timeFrameInMinute || 5
      } minutes before requesting again.`,
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
}

export async function testthing(test1?: any, test2?: number) {
  // return (test1 ? test1 : 5) + (test2 ? test2 : 2);
  // return (test1 || 5) + (test2 || 2);
  return (test1 || 5) + (test2 || 2);
}
