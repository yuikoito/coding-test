/**
 * Given a function fn, an array or arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
 * After a delay of t, fn should be called with args passed as parameters unless cancelFn was called first. In that case, fn should never be called.
 * @refs https://leetcode.com/problems/execute-cancellable-function-with-delay/?envType=study-plan-v2&envId=30-days-of-javascript
 */

export const cancellable = (fn: Function, args: number[], t: number) => {
  const timeoutId = setTimeout(() => fn(...args), t);
  const cancelFn = () => {
    clearTimeout(timeoutId);
  };
  return cancelFn;
};
