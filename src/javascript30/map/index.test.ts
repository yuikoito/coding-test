import { map } from "./index";

describe("map function", () => {
  test("the function increases each value in the array by 1", () => {
    const arr = [1, 2, 3];
    const fn = (n: number) => n + 1;
    expect(map(arr, fn)).toEqual([2, 3, 4]);
  });
  test("the function increases each value in the array by the index", () => {
    const arr = [1, 2, 3];
    const fn = (n: number, i: number) => n + i;
    expect(map(arr, fn)).toEqual([1, 3, 5]);
  });
  test("the function returns always 10", () => {
    const arr = [1, 2, 3];
    const fn = () => 10;
    expect(map(arr, fn)).toEqual([10, 10, 10]);
  });
});
