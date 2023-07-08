// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
// @refs https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript

export const sleep = async (millis: number): Promise<void> => {
  return await new Promise((resolve) => setTimeout(() => resolve(), millis));
};
