const reverseInt = require("../reverse-int.js");

describe("testing reverse-int.js", () => {
  test("ReverseInt function exists", () => {
    expect(reverseInt).toBeDefined();
  });
});

describe("testing reverse-int.js", () => {
  test("ReverseInt handles 0 as an input", () => {
    expect(reverseInt(0)).toEqual(0);
  });
});

describe("testing reverse-int.js", () => {
  test("ReverseInt flips a positive number", () => {
    expect(reverseInt(5)).toEqual(5);
    expect(reverseInt(15)).toEqual(51);
    expect(reverseInt(90)).toEqual(9);
    expect(reverseInt(2359)).toEqual(9532);
  });
});

describe("testing reverse-int.js", () => {
  test("ReverseInt flips a negative number", () => {
    expect(reverseInt(-5)).toEqual(-5);
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-90)).toEqual(-9);
    expect(reverseInt(-2359)).toEqual(-9532);
  });
});
