import { cancellable } from ".";

describe("cancellable function", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("should execute the function after delay", () => {
    const inputFunction = (x: number) => x * 5;
    const fn = jest.fn(inputFunction);
    const t = 100;
    const cancel = cancellable(fn, [2], t);
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(t); // wait t ms
    expect(fn).toBeCalled();
    jest.advanceTimersByTime(10); // wait 10 ms
    cancel(); // cancel after the delay timer is expired
    expect(fn).toBeCalled();
    expect(fn).toHaveReturnedWith(10);
  });
  test("should not execute the function if the cancel function is called before delay time", () => {
    const inputFunction = (x: number) => x * 5;
    const fn = jest.fn(inputFunction);
    const t = 100;
    const cancel = cancellable(fn, [2], t);
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(t - 10); // wait (t - 10) ms
    cancel(); // cancel before the delay timer is expired
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(10);
    expect(fn).not.toBeCalled(); // make sure that the function successfully canceled
  });
});
