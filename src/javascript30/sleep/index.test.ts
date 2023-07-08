import { sleep } from ".";

describe("sleep function", () => {
  test("wait 100 millis", async () => {
    const t = Date.now();
    await sleep(100);
    expect(Date.now() - t).toBeGreaterThanOrEqual(100); // not possible to wait for exact time with javascript
  });
  test("wait 200 millis", async () => {
    const t = Date.now();
    await sleep(200);
    expect(Date.now() - t).toBeGreaterThanOrEqual(200);
  });
});
