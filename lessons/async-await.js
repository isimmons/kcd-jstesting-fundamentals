const { sumAsync, subtractAsync } = require("../math");

describe("math", () => {
  it("should return the sum of numbers", async () => {
    const result = await sumAsync(3, 7);
    const expected = 10;
    expect(result).toBe(expected);
  });

  it("should subtract numbers", async () => {
    const result = await subtractAsync(7, 3);
    const expected = 4;
    expect(result).toBe(expected);
  });
});

// will work for both sync and async tests
async function it(title, callback) {
  try {
    await callback();
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
