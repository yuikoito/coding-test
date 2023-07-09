/**
 * Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
 * You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 * @refs https://leetcode.com/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript
 */
type Obj = Record<any, any>;
export const compactObject = (obj: Obj): Obj => {
  if (typeof obj !== "object") return obj;
  if (Array.isArray(obj)) {
    return obj.reduce((acc, cur) => {
      if (Boolean(cur)) acc.push(compactObject(cur));
      return acc;
    }, []);
  }
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (Boolean(value)) acc[key] = compactObject(value);
    return acc;
  }, {});
};
