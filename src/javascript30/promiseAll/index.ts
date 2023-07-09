/**
 * Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise.
 * promise resolves:
 * When all the promises returned from functions were resolved successfully. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions.
 * promise rejects:
 * When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
 * Please solve it without using the built-in Promise.all function.
 * @refs https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/?envType=study-plan-v2&envId=30-days-of-javascript
 */

export const promiseAll = async <T>(
  functions: (() => Promise<T>)[]
): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    let results: T[] = [];
    let count = 0;
    functions.forEach(async (func, index) => {
      try {
        const res = await func();
        results[index] = res;
        ++count;
        if (count === functions.length) resolve(results);
      } catch (e) {
        reject(e);
      }
    });
  });
};
