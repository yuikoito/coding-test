import { composition } from "./index";

describe("composition function", () => {
  test("[f(x), g(x), h(x)] is fn(x) = f(g(h(x)))", () => {
    const functions = [
      (num: number) => num + 1,
      (num: number) => num + 2,
      (num: number) => num + 3,
    ];
    const compositionFunction = composition(functions);
    const init = 10;
    // 1...10 + 3 = 13
    // 2...13 + 2 = 15
    // 3...15 + 1 = 16
    expect(compositionFunction(init)).toBe(16);
  });
  test("return init value when functions is empty array", () => {
    const functions = [];
    const compositionFunction = composition(functions);
    const init = 10;
    expect(compositionFunction(init)).toBe(init);
  });
});
