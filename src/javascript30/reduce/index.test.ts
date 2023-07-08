import { reduce } from "./index";

describe("reduce function", () => {
  test("the function sums up the nums", () => {
    const nums = [1, 2, 3, 4];
    const fn = (num: number, current: number) => num + current;
    const init = 0;
    // 1..0 + 1 = 1
    // 2..1 + 2 = 3
    // 3..3 + 3 = 6
    // 4..6 + 4 = 10
    expect(reduce(nums, fn, init)).toBe(10);
  });
  test("the function multiplies the nums", () => {
    const nums = [1, 2, 3, 4];
    const fn = (num: number, current: number) => num * current;
    const init = 1;
    // 1..1 * 1 = 1
    // 2..1 * 2 = 2
    // 3..2 * 3 = 6
    // 4..6 * 4 = 24
    expect(reduce(nums, fn, init)).toBe(24);
  });
  test("return init value when nums is empty", () => {
    const nums = [];
    const fn = (num: number, current: number) => num * current;
    const init = 1;
    expect(reduce(nums, fn, init)).toBe(init);
  });
});
