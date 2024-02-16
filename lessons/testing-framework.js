const { sum, subtract } = require("../math");

describe("math", () => {
  it("should return the sum of numbers", () => {
    const result = sum(3, 7);
    const expected = 10;
    expect(result).toBe(expected);
  });

  it("should subtract numbers", () => {
    const result = subtract(7, 3);
    const expected = 4;
    expect(result).toBe(expected);
  });
});

function it(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

function describe(title, callback) {
  console.log(title);
  callback();
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
