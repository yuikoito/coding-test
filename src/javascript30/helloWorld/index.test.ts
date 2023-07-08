import { createHelloWorld } from "./index";

describe("createHelloWorld function", () => {
  const fn = createHelloWorld();
  test("return Hello World", () => {
    expect(fn()).toBe("Hello World");
  });
  test("return Hello World even if some arguments are given", () => {
    expect(fn("arguments")).toBe("Hello World");
  });
});
