/**
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of an empty list of functions is the identity function f(x) = x.
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 * @refs https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
 */

type Function = (num: number) => number;
export const composition = (functions: Function[]): Function => {
  return (num: number) => {
    let returnedValue = num;
    for (let i = functions.length - 1; i >= 0; i--) {
      returnedValue = functions[i](returnedValue);
    }
    return returnedValue;
  };
};
