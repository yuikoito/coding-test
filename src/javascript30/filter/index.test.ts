import { filter } from "./index";

describe("filter function", () => {
  test("the function filters out value that is not more than 2", () => {
    const arr = [1, 2, 3];
    const fn = (number: number) => number > 2;
    expect(filter(arr, fn)).toEqual([3]);
  });
  test("the function filters out value that is does not equal to the index of the array", () => {
    const arr = [1, 2, 3, 3, 4];
    const fn = (number: number, index: number) => number === index;
    expect(filter(arr, fn)).toEqual([3, 4]);
  });
  test("the function filters out value that is not more than index", () => {
    const arr = [1, 2, 3, 3, 4];
    const fn = (number: number, index: number) => number > index;
    expect(filter(arr, fn)).toEqual([1, 2, 3]);
  });
  test("falsy value such as 0 should be filters out", () => {
    const arr = [0, 2, 3, 3, 4];
    const fn = (number: number) => number;
    expect(filter(arr, fn)).toEqual([2, 3, 3, 4]);
  });
});
