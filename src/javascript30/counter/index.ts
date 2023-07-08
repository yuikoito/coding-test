// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
// @refs https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript

export const createCounter = (input: number) => {
  return () => input++;
};
