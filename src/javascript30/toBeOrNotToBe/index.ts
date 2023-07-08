// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
// @refs https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript

type ToBeOrNotToBe = {
  toBe: (value: any) => true | Error;
  notToBe: (value: any) => true | Error;
};
const throwError = (errorText: string) => {
  throw new Error(errorText);
};
export const toBeOrNotToBe = (expectedValue: any): ToBeOrNotToBe => {
  return {
    toBe: (value: any) =>
      value === expectedValue ? true : throwError("Not Equal"),
    notToBe: (value: any) =>
      value !== expectedValue ? true : throwError("Equal"),
  };
};
