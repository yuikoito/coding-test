/**
 * Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.
 * You may assume that fn will never duplicate numbers for a given array.
 * @refs https://leetcode.com/problems/sort-by/?envType=study-plan-v2&envId=30-days-of-javascript
 */

// using built-in function
// export const sortBy = (arr: any[], fn: (...args: any[]) => number) => {
//   return arr.sort((a, b) => (fn(a) < fn(b) ? -1 : 1));
// };

export const sortBy = (arr: any[], fn: (...args: any[]) => number): any[] => {
  let sortedByArray: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      sortedByArray.push(arr[i]);
      continue;
    }
    if (fn(arr[i - 1]) < fn(arr[i])) {
      sortedByArray.push(arr[i]);
    } else {
      sortedByArray.unshift(arr[i]);
    }
  }
  return sortedByArray;
};
