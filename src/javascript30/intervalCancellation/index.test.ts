import { intervalCancellation } from ".";

describe("interval cancellation function", () => {
  let fn:jest.Mock;
  const inputFunction = (n: number) => n + 5;
  beforeEach(() => {
    jest.useFakeTimers();
    fn = jest.fn(inputFunction);
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("should execute the function immediately", () => {
    const intervalTime = 100;
    intervalCancellation(fn, [2], intervalTime);
    expect(fn).toBeCalled();
    expect(fn).toHaveReturnedWith(7);
  });
  test("should execute the function again every t milliseconds", () => {
    const intervalTime = 100;
    intervalCancellation(fn, [2], intervalTime);
    jest.advanceTimersByTime(intervalTime);
    expect(fn).toBeCalledTimes(2);
    jest.advanceTimersByTime(intervalTime);
    expect(fn).toBeCalledTimes(3);
  });
  test("should not execute the function again after the cancel function is called", () => {
    const intervalTime = 100;
    const cancel = intervalCancellation(fn, [2], intervalTime);
    jest.advanceTimersByTime(intervalTime);
    expect(fn).toBeCalledTimes(2);
    cancel();
    expect(fn).toBeCalledTimes(2);
  });
});
