/**
 * Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
 * You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
 * Please solve it without using lodash's _.chunk function.
 * @refs https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript
 */

// using while
export const chunkArray = (arr: any[], size: number): any[][] => {
  if (arr.length === 0) return [];
  const results: any[][] = [];
  while (arr.length) results.push(arr.splice(0, size));
  return results;
};

// using for
// export const chunkArray = (arr: any[], size: number): any[][] => {
//   if (arr.length === 0) return [];
//   if (arr.length <= size) return [arr];

//   const chunkedArray: any[][] = [];
//   let temp: any[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     temp.push(arr[i]);
//     if (temp.length === size || i === arr.length - 1) {
//       chunkedArray.push(temp);
//       temp = [];
//     }
//   }
//   return chunkedArray;
// };
