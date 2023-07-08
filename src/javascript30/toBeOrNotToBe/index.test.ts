import { toBeOrNotToBe } from "./index";

describe("toBeOrNotToBe function", () => {
  test("toBeOrNotToBe(5).toBe(5) is true", () => {
    expect(toBeOrNotToBe(5).toBe(5)).toBe(true);
  });
  test("toBeOrNotToBe(5).toBe(null) throws Not Equal", () => {
    expect(() => toBeOrNotToBe(5).toBe(null)).toThrow("Not Equal");
  });
  test("toBeOrNotToBe(5).notToBe(5) throws Equal", () => {
    expect(() => toBeOrNotToBe(5).notToBe(5)).toThrow("Equal");
  });
  test("toBeOrNotToBe(5).notToBe(null) is true", () => {
    expect(toBeOrNotToBe(5).notToBe(null)).toBe(true);
  });
});
