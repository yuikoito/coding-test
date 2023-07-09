import { compactObject } from ".";

describe("compactObject function", () => {
  test("normal array", () => {
    const obj = [null, 0, false, 1];
    expect(compactObject(obj)).toEqual([1]);
  });
  test("array in object", () => {
    const obj = { a: null, b: [false, 1] };
    expect(compactObject(obj)).toEqual({ b: [1] });
  });
  test("deeply nested array", () => {
    const obj = [null, 0, 5, [0], [false, 16]];
    expect(compactObject(obj)).toEqual([5, [], [16]]);
  });
  test("associative array", () => {
    const obj = { a: null, b: { a: null, b: true } };
    expect(compactObject(obj)).toEqual({ b: { b: true } });
  });
});
