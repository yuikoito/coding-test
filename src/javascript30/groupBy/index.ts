/**
 * Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
 * A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
 * The provided callback fn will accept an item in the array and return a string key.
 * The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
 * Please solve it without lodash's _.groupBy function.
 * @refs https://leetcode.com/problems/group-by/?envType=study-plan-v2&envId=30-days-of-javascript
 */

type GroupedObject = {
  [key: string]: any[];
};
export const groupBy = (arr: any[], fn: Function) => {
  const groupedObject: GroupedObject = {};
  for (let i = 0; i < arr.length; i++) {
    const key = fn(arr[i]);
    if (key in groupedObject) {
      groupedObject[key].push(arr[i]);
    } else {
      groupedObject[key] = [arr[i]];
    }
  }
  return groupedObject;
};
