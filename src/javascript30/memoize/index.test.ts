import { memoize } from ".";

describe("memoize function", () => {
  test("when sum function is given", () => {
    const sum = jest.fn((a: number, b: number) => a + b);
    const memoizedFunction = memoize(sum);
    // first call
    expect(memoizedFunction(1, 2)).toBe(3);
    expect(sum).toHaveBeenCalledTimes(1);
    expect(sum).toHaveBeenCalledWith(1, 2);
    // second call
    memoizedFunction(1, 2);
    expect(sum).toHaveBeenCalledTimes(1);
    // third call but with different arguments
    expect(memoizedFunction(2, 2)).toBe(4);
    expect(sum).toHaveBeenCalledTimes(2);
  });
  test("when fib function is given", () => {
    const fib = (n: number) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
    const mockedFib = jest.fn(fib);
    const memoizedFunction = memoize(mockedFib);
    // first call
    expect(memoizedFunction(1)).toBe(1);
    expect(mockedFib).toHaveBeenCalledTimes(1);
    expect(mockedFib).toHaveBeenCalledWith(1);
    // second call
    memoizedFunction(1);
    expect(mockedFib).toHaveBeenCalledTimes(1);
    // third call but with different arguments
    expect(memoizedFunction(2)).toBe(2); // fib(2 - 1) = fib(1) = 1, fib(2 - 2) = fib(0) = 1
    expect(mockedFib).toHaveBeenCalledTimes(2);
  });
  test("when factorial function is given", () => {
    const factorial = (n: number) => (n <= 1 ? 1 : factorial(n - 1) * n);
    const mockedFactorial = jest.fn(factorial);
    const memoizedFunction = memoize(mockedFactorial);
    // first call
    expect(memoizedFunction(1)).toBe(1);
    expect(mockedFactorial).toHaveBeenCalledTimes(1);
    expect(mockedFactorial).toHaveBeenCalledWith(1);
    // second call
    memoizedFunction(1);
    expect(mockedFactorial).toHaveBeenCalledTimes(1);
    // third call but with different arguments
    expect(memoizedFunction(2)).toBe(2); // factorial(2 - 1) = factorial(1) = 1
    expect(mockedFactorial).toHaveBeenCalledTimes(2);
  });
});
