import { argumentsLength } from "./index";

describe("argumentsLength function", () => {
  test("one value is passed to the function so it should return 1", () => {
    expect(argumentsLength([])).toBe(1);
  });
  test("three values are passed to the function so it should return 3", () => {
    expect(argumentsLength(null, {}, 1)).toBe(3);
  });
});
