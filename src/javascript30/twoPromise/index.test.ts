import { addTwoPromise } from ".";

describe("addTwoPromise function", () => {
  test("should return 3 because promise1 returns 1 and promise2 returns 2", async () => {
    const promise1 = new Promise<number>((resolve) => resolve(1));
    const promise2 = new Promise<number>((resolve) => resolve(2));
    expect(await addTwoPromise(promise1, promise2)).toBe(3);
  });
  test("use setTimeout: should return 3 because promise1 returns 1 and promise2 returns 2", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(1), 10)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(2), 10)
    );
    expect(await addTwoPromise(promise1, promise2)).toBe(3);
  });
});
