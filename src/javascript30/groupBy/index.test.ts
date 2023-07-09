import { groupBy } from ".";

describe("groupBy function", () => {
  test("number array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const fn = (num: number) => String(num > 5);
    expect(groupBy(array, fn)).toEqual({
      true: [6, 7, 8, 9, 10],
      false: [1, 2, 3, 4, 5],
    });
  });
  test("multidimensional array", () => {
    const array = [
      [1, 2, 3],
      [1, 3, 5],
      [1, 5, 9],
    ];
    const fn = (list: number[]) => String(list[0]);
    expect(groupBy(array, fn)).toEqual({
      "1": [
        [1, 2, 3],
        [1, 3, 5],
        [1, 5, 9],
      ],
    });
  });
  test("associative array", () => {
    const array = [{ id: "1" }, { id: "1" }, { id: "2" }];
    const fn = (item: { [id: string]: string }) => String(item.id);
    expect(groupBy(array, fn)).toEqual({
      "1": [{ id: "1" }, { id: "1" }],
      "2": [{ id: "2" }],
    });
  });
});
