import { timeLimit } from ".";

describe("promiseTimeLimit function", () => {
  const inputFn = async (n: number) => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 100));
    return n;
  };

  let fn: jest.Mock;
  beforeEach(() => {
    fn = jest.fn(inputFn);
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("should return the function result if it finishes within time limit", async () => {
    const t = 200;
    const limited = timeLimit(fn, t);
    const result = limited(2);
    jest.advanceTimersByTime(100);
    await expect(result).resolves.toBe(2);
    expect(fn).toBeCalledTimes(1);
  });
  test("should throw time limit exceeded if it does not finish within time limit", async () => {
    const t = 50;
    const limited = timeLimit(fn, t);
    const result = limited(2);
    jest.advanceTimersByTime(t);
    await expect(result).rejects.toMatch("Time Limit Exceeded");
    expect(fn).toBeCalledTimes(1);
  });
});
