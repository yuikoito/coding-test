import { allowOnceCall } from ".";

describe("allowOnceCall function", () => {
  test("if the function is called only once, allowOnceCall should return the function", () => {
    const fn = () => 10;
    const allowOnceCallFunction = allowOnceCall(fn);
    expect(allowOnceCallFunction()).toBe(10);
  });
  test("if the function is called more than once, allowOnceCall should return undefined", () => {
    const fn = () => 10;
    const allowOnceCallFunction = allowOnceCall(fn);
    allowOnceCallFunction(); // first
    expect(allowOnceCallFunction()).toEqual(undefined); // second
    expect(allowOnceCallFunction()).toEqual(undefined); // third
  });
});
