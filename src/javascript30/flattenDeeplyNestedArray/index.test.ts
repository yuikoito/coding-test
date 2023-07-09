import { flattenDeeplyNestedArray } from ".";

describe("flattenDeeplyNestedArray function", () => {
  test("return the input array if the depth is 0", () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    const n = 0;
    expect(flattenDeeplyNestedArray(arr, n)).toEqual(arr);
  });
  test("return the flatten array: n = 1", () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    const n = 1;
    expect(flattenDeeplyNestedArray(arr, n)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      [9, 10, 11],
      12,
      13,
      14,
      15,
    ]);
  });
  test("return the flatten array: n = 2", () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    const n = 2;
    expect(flattenDeeplyNestedArray(arr, n)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
  });
});
