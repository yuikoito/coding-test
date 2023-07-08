/**
 * Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 * @refs https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript
 */

export const addTwoPromise = async (
  promise1: Promise<number>,
  promise2: Promise<number>
): Promise<number> => {
  const [res1, res2] = await Promise.all([promise1, promise2]);
  return res1 + res2;
};
