import { joinTwoArrays } from ".";

describe("joinTwoArrays function", () => {
  test("There are no duplicate ids so arr1 is simply concatenated with arr2", () => {
    const arr1 = [{ id: 1, x: 1 }];
    const arr2 = [{ id: 2, x: 1 }];
    expect(joinTwoArrays(arr1, arr2)).toEqual([
      { id: 1, x: 1 },
      { id: 2, x: 1 },
    ]);
  });
  test("The two objects has the same id and same key so the value should be overwritten by arr2", () => {
    const arr1 = [{ id: 1, x: 1 }];
    const arr2 = [{ id: 1, x: 2 }];
    expect(joinTwoArrays(arr1, arr2)).toEqual([{ id: 1, x: 2 }]);
  });
  test("The two objects has the same id but arr1 has a unique key so the key-value pair should be included in the object", () => {
    const arr1 = [{ id: 1, x: 1, y: 2 }];
    const arr2 = [{ id: 1, x: 2 }];
    expect(joinTwoArrays(arr1, arr2)).toEqual([{ id: 1, x: 2, y: 2 }]);
  });
});
