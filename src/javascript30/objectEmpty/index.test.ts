import { isObjectEmpty } from ".";

describe("isObjectEmpty function", () => {
  test("return true if an empty object is given", () => {
    const emptyObj = {};
    expect(isObjectEmpty(emptyObj)).toBe(true);
  });
  test("return true if an empty array is given", () => {
    const emptyArray = {};
    expect(isObjectEmpty(emptyArray)).toBe(true);
  });
  test("return false if a non-empty object is given", () => {
    const obj = { hoge: "huga" };
    expect(isObjectEmpty(obj)).toBe(false);
  });
  test("return false if a non-empty array is given", () => {
    const array = [1, 2, 3];
    expect(isObjectEmpty(array)).toBe(false);
  });
});
