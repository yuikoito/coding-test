import { reverseVowels } from ".";

describe("reverseVowels function", () => {
  test("hello should be holle", () => {
    expect(reverseVowels("hello")).toEqual("holle");
  });
  test("apple should be eppla", () => {
    expect(reverseVowels("apple")).toEqual("eppla");
  });
});
