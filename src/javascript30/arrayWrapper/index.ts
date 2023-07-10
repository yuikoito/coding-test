/**
 * Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
 * When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
 * When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
 * @refs https://leetcode.com/problems/array-wrapper/?envType=study-plan-v2&envId=30-days-of-javascript
 */

export class ArrayWrapper {
  private array: number[];
  constructor(array: number[]) {
    this.array = array;
  }
  toString() {
    return `[${this.array.toString()}]`;
  }
  valueOf() {
    return this.array.reduce((a, b) => a + b, 0);
  }
  add(other: ArrayWrapper) {
    return this.valueOf() + other.valueOf();
  }
}
