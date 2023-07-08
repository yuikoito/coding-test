/**
 * Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
 * The first time the returned function is called, it should return the same result as fn.
 * Every subsequent time it is called, it should return undefined.
 * @refs https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript
 */

export const allowOnceCall = (fn: Function): Function => {
  let isAlreadyCalled = false;
  return (...args: any) => {
    if (isAlreadyCalled) return undefined;
    isAlreadyCalled = true;
    return fn(...args);
  };
};
