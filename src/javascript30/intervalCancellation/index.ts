/**
 * Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn. The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called.
 * @refs https://leetcode.com/problems/interval-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript
 */

export const intervalCancellation = (
  fn: Function,
  args: number[],
  t: number
) => {
  fn(...args);
  const intervalId = setInterval(() => fn(...args), t);
  const cancelFn = () => {
    clearInterval(intervalId);
  };
  return cancelFn;
};
