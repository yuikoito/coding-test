import { promiseAll } from ".";

describe("promiseAll function", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("should be resolved after all promises resolved", async () => {
    const promise1 = () =>
      new Promise((resolve) => setTimeout(() => resolve(1), 100));
    const mockPromise1 = jest.fn(promise1);
    const promise2 = () =>
      new Promise((resolve) => setTimeout(() => resolve(2), 150));
    const mockPromise2 = jest.fn(promise2);
    const resultsPromise = promiseAll([mockPromise1, mockPromise2]);
    expect(mockPromise1).toBeCalledTimes(1);
    expect(mockPromise2).toBeCalledTimes(1);
    jest.advanceTimersByTime(150);
    await expect(resultsPromise).resolves.toEqual([1, 2]);
  });
  test("should be rejected if one of functions is rejected", async () => {
    const promise1 = () =>
      new Promise((_, reject) => setTimeout(() => reject("Rejected"), 100));
    const mockPromise1 = jest.fn(promise1);
    const promise2 = () =>
      new Promise((resolve) => setTimeout(() => resolve(2), 150));
    const mockPromise2 = jest.fn(promise2);
    const resultsPromise = promiseAll([mockPromise1, mockPromise2]);
    expect(mockPromise1).toBeCalledTimes(1);
    expect(mockPromise2).toBeCalledTimes(1);
    jest.advanceTimersByTime(100);
    await expect(resultsPromise).rejects.toEqual("Rejected");
  });
});
