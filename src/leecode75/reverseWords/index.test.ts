import { reverseWords } from ".";

describe("reverseWords function", () => {
  test("`this is a pen` should be `pen a is this`", () => {
    expect(reverseWords("this is a pen")).toEqual("pen a is this");
  });
  test("`  hello world  ` should be `world hello`", () => {
    expect(reverseWords("  hello world  ")).toEqual("world hello");
  });
  test("`a good   example` should be `example good a`", () => {
    expect(reverseWords("a good   example")).toEqual("example good a");
  });
});
