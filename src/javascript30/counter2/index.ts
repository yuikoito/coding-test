/**
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 * The three functions are:
 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
 * @refs https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
 */

type CounterFunctions = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};
export const createCounter = (init: number): CounterFunctions => {
  let returnValue = init;
  return {
    increment: () => ++returnValue,
    decrement: () => --returnValue,
    reset: () => (returnValue = init),
  };
};
