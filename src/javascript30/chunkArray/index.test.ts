import { chunkArray } from ".";

describe("chunkArray function", () => {
  test("array should be divided by 1", () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 1;
    expect(chunkArray(arr, size)).toEqual([[1], [2], [3], [4], [5]]);
  });
  test("array should be divided by 3", () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 3;
    expect(chunkArray(arr, size)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });
  test("array should be divided by 6", () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 6;
    expect(chunkArray(arr, size)).toEqual([[1, 2, 3, 4, 5]]);
  });
  test("return empty array if input array is empty", () => {
    const arr = [];
    const size = 6;
    expect(chunkArray(arr, size)).toEqual([]);
  });
});
