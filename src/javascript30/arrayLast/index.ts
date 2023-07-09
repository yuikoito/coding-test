/**
 * Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
 * You may assume the array is the output of JSON.parse.
 * @refs https://leetcode.com/problems/array-prototype-last/?envType=study-plan-v2&envId=30-days-of-javascript
 */

export const arrayLast = (arr: any[]) => {
  return arr.length === 0 ? -1 : arr[arr.length - 1];
};
// this is the correct answer but here I write like as above because I need to write a unit test
// declare global {
//   interface Array<T> {
//     last(): T | -1;
//   }
// }

// Array.prototype.last = function () {
//   if (!this.length) return -1;
//   return this.length === 0 ? -1 : this[this.length - 1];
// };
