/**
 * Given an object or an array, return if it is empty.
 * An empty object contains no key-value pairs.
 * An empty array contains no elements.
 * You may assume the object or array is the output of JSON.parse.
 * @refs https://leetcode.com/problems/is-object-empty/?envType=study-plan-v2&envId=30-days-of-javascript
 */

export const isObjectEmpty = (args: Object | Array<any>): boolean => {
  return Object.keys(args).length === 0;
};
