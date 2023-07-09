import { arrayLast } from ".";

describe("arrayLast function", () => {
  test("return the last element of array", () => {
    expect(arrayLast([1, 2, 3])).toBe(3);
  });
  test("return -1 if the array is empty", () => {
    expect(arrayLast([])).toBe(-1);
  });
});
