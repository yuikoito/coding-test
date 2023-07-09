/**
 * Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
 * The time limited function should follow these rules:
 * If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
 * If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
 * @refs https://leetcode.com/problems/promise-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript
 */
type Fn = (...params: number[]) => Promise<any>;
export const timeLimit = (fn: Fn, t: number) => {
  let timeoutId;
  const timeoutPromise = new Promise(
    (_, reject) =>
      (timeoutId = setTimeout(() => reject("Time Limit Exceeded"), t))
  );
  return async (...args: number[]) => {
    try {
      return await Promise.race([fn(...args), timeoutPromise]);
    } finally {
      clearTimeout(timeoutId);
    }
  };
};

