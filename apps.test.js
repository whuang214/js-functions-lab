// Description: Test file for apps.js
const {
  maxOfTwoNumbers,
  maxOfThree,
  isCharAVowel,
  sumArray,
  multiplyArray,
  numArgs,
  reverseString,
  longestStringInArray,
  stringsLongerThan,
} = require("./apps");

// 1. maxOfTwoNumbers
describe("maxOfTwoNumbers", () => {
  test("normal test", () => {
    expect(maxOfTwoNumbers(99, 100)).toBe(100);
  });

  test("same number test", () => {
    expect(maxOfTwoNumbers(99, 99)).toBe(99);
  });
});

// 2. maxOfThree
describe("maxOfThree", () => {
  test("normal test", () => {
    expect(maxOfThree(49, 50, 51)).toBe(51);
  });

  test("same number test", () => {
    expect(maxOfThree(99, 99, 99)).toBe(99);
  });
});

// 3. isCharAVowel
describe("isCharAVowel", () => {
  test("vowel test", () => {
    expect(isCharAVowel("a")).toBe(true);
  });

  test("non-vowel test", () => {
    expect(isCharAVowel("x")).toBe(false);
  });
});

// 4. sumArray
describe("sumArray", () => {
  test("normal test", () => {
    expect(sumArray([2, 4, 5])).toBe(11);
  });

  test("empty array test", () => {
    expect(sumArray([])).toBe(0);
  });
});

// 5. multiplyArray
describe("multiplyArray", () => {
  test("normal test", () => {
    expect(multiplyArray([2, 4, 5])).toBe(40);
  });

  test("empty array test", () => {
    expect(multiplyArray([])).toBe(1);
  });
});

// 6. numArgs
describe("numArgs", () => {
  test("normal test", () => {
    expect(numArgs(1, 2, 4, 1, 5, 1, 1)).toBe(7);
  });

  test("no arguments test", () => {
    expect(numArgs()).toBe(0);
  });
});

// 7. reverseString
describe("reverseString", () => {
  test("normal test", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("empty string test", () => {
    expect(reverseString("")).toBe("");
  });
});

// 8. longestStringInArray
describe("longestStringInArray", () => {
  test("normal test", () => {
    expect(longestStringInArray(["hello", "goodbye", "hi", "bye"])).toBe(
      "goodbye"
    );
  });

  test("empty array test", () => {
    expect(longestStringInArray([])).toBe("");
  });
});

// 9. stringsLongerThan
describe("stringsLongerThan", () => {
  test("normal test", () => {
    expect(stringsLongerThan(["hello", "goodbye", "hi", "bye"], 3)).toEqual([
      "hello",
      "goodbye",
    ]);
  });

  test("empty array test", () => {
    expect(stringsLongerThan([], 3)).toEqual([]);
  });
});
