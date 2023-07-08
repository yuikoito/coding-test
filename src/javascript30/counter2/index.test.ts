import { createCounter } from "./index";

describe("createCounter function", () => {
  test("increment method should increase the counter by 1", () => {
    const init = 5;
    const counter = createCounter(init);
    expect(counter.increment()).toBe(init + 1);
  });
  test("decrement method should decrease the counter by 1", () => {
    const init = 5;
    const counter = createCounter(init);
    expect(counter.decrement()).toBe(init - 1);
  });
  test("reset method should reset the counter to initial value", () => {
    const init = 5;
    const counter = createCounter(init);
    expect(counter.reset()).toBe(init);
  });
  test("performs a series of operations: increment > increment > decrement > reset > decrement", () => {
    const init = 5;
    const counter = createCounter(init);
    expect(counter.increment()).toBe(init + 1);
    expect(counter.increment()).toBe(init + 2);
    expect(counter.decrement()).toBe(init + 1);
    expect(counter.reset()).toBe(init);
    expect(counter.decrement()).toBe(init - 1);
  });
});
