import { createCounter } from "./index";

describe("createCounter function", () => {
  test("returns the initial value at the first call", () => {
    const initialValue = 10;
    const counter = createCounter(initialValue);
    expect(counter()).toBe(initialValue);
  });

  test("returns 1 more than the initial value at the second call", () => {
    const initialValue = 10;
    const counter = createCounter(initialValue);
    counter();
    expect(counter()).toBe(initialValue + 1);
  });

  test("returns 2 more than the initial value at the third call", () => {
    const initialValue = 10;
    const counter = createCounter(initialValue);
    counter();
    counter();
    expect(counter()).toBe(initialValue + 2);
  });
});
