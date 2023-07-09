import { debounce } from ".";

describe("debounce function", () => {
  let fn: jest.Mock;
  beforeEach(() => {
    jest.useFakeTimers();
    fn = jest.fn((n: number) => n);
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("the first call should be canceled by the second call", () => {
    const debounced = debounce(fn, 50);
    jest.advanceTimersByTime(10); // 10 ms
    debounced(1); // should be canceled
    jest.advanceTimersByTime(20); // 30 ms
    debounced(2); // should be executed after 30 + 50 ms
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(50); // 80 ms
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith(2);
    expect(fn).toHaveReturnedWith(2);
  });
  test("the first call should not be canceled because the second call is executed after the duration", () => {
    const debounced = debounce(fn, 50);
    jest.advanceTimersByTime(10);
    debounced(1); // should not be canceled and should be executed after 10 + 50 ms
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(50); // 60 ms
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith(1);
    expect(fn).toHaveReturnedWith(1);
    jest.advanceTimersByTime(10); // 70 ms
    debounced(2); // should be called after 70 + 50 ms
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith(1);
    jest.advanceTimersByTime(50); // 120 ms
    expect(fn).toBeCalledTimes(2);
    expect(fn).toBeCalledWith(2);
    expect(fn).toHaveReturnedWith(2);
  });
  test("the first call and the second call should be canceled by the third call", () => {
    const debounced = debounce(fn, 50);
    jest.advanceTimersByTime(10); // 10 ms
    debounced(1); // supposed to be called after 10 + 50 ms but should be canceled by the second call
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(40); // 50 ms
    debounced(2); //  supposed to be called after 50 + 50 ms but should be canceled by the third call
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(10); // 60 ms
    debounced(3); //  supposed to be called after 60 + 50 ms
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(50); // 110 ms
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith(3);
    expect(fn).toHaveReturnedWith(3);
  });
});
