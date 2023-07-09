import { sortBy } from ".";

describe("sortBy function", () => {
  test("should be sorted based on the value * -1", () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = (n: number) => n * -1;
    expect(sortBy(arr, fn)).toEqual([5, 4, 3, 2, 1]);
  });
  test("should be sorted based on the value of element", () => {
    const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
    const fn = (n: { x: number }) => n.x;
    expect(sortBy(arr, fn)).toEqual([{ x: -1 }, { x: 0 }, { x: 1 }]);
  });
  test("should be sorted based on the result of sum of the element", () => {
    const arr = [
      [3, 4],
      [5, 3],
      [10, 1],
    ];
    const fn = (n: number[]) => n.reduce((acc, cur) => acc + cur, 0);
    expect(sortBy(arr, fn)).toEqual([
      [3, 4],
      [5, 3],
      [10, 1],
    ]);
  });
});
