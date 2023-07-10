import { ArrayWrapper } from ".";

describe("ArrayWrapper class", () => {
  test("When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays", () => {
    const array1 = new ArrayWrapper([1, 1]); // sum: 2
    const array2 = new ArrayWrapper([2, 2]); // sum: 4
    expect(array1.add(array2)).toBe(6);
  });
  test("When the String() function is called on the instance, it will return a comma separated string surrounded by brackets.", () => {
    const array1 = new ArrayWrapper([1, 1]);
    const array2 = new ArrayWrapper([2, 2]);
    expect(String(array1)).toEqual("[1,1]");
    expect(String(array2)).toEqual("[2,2]");
  });
});
