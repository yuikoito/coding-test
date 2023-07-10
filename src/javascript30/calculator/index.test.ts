import { Calculator } from ".";

describe("Calculator class", () => {
  test("return the result: (0 + 6 - 2) * 3 / 2 ** 2", () => {
    const calculator = new Calculator(0);
    expect(
      calculator.add(6).subtract(2).multiply(3).divide(2).power(2).getResult()
    ).toBe(36);
  });
  test("throw Error if 0 is given for divide", () => {
    const calculator = new Calculator(0);
    expect(() =>
      calculator.add(6).subtract(2).multiply(3).divide(0).power(2).getResult()
    ).toThrow("Division by zero is not allowed");
  });
});
