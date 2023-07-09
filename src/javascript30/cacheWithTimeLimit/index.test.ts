import { CacheWithTimeLimit } from ".";

describe("CacheWithTimeLimit class", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("no cache is registered", () => {
    const cacheWithTimeLimit = new CacheWithTimeLimit();
    expect(cacheWithTimeLimit.get(1)).toBe(-1);
    expect(cacheWithTimeLimit.count()).toBe(0);
  });
  test("set a new cache and it will be expired after the duration", () => {
    const cacheWithTimeLimit = new CacheWithTimeLimit();
    expect(cacheWithTimeLimit.set(1, 2, 10)).toBe(false);
    expect(cacheWithTimeLimit.count()).toBe(1);
    expect(cacheWithTimeLimit.get(1)).toBe(2);
    jest.advanceTimersByTime(10);
    expect(cacheWithTimeLimit.count()).toBe(0);
    expect(cacheWithTimeLimit.get(1)).toBe(-1);
  });
  test("set a new cache and it will be overwritten within the duration", () => {
    const cacheWithTimeLimit = new CacheWithTimeLimit();
    cacheWithTimeLimit.set(1, 2, 10);
    jest.advanceTimersByTime(5);
    expect(cacheWithTimeLimit.set(1, 3, 10)).toBe(true);
    expect(cacheWithTimeLimit.count()).toBe(1);
    expect(cacheWithTimeLimit.get(1)).toBe(3);
  });
});
