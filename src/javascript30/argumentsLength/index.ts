// Write a function argumentsLength that returns the count of arguments passed to it.
// @refs https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript

export const argumentsLength = (...args: any): number => {
  return [...args].length;
};
