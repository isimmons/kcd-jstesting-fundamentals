const { sumAsync, subtractAsync } = require("../math");

// it, describe, expect provided by jest this time
// They work in the same way (prettier formatting though)
// apparently globals are turned on by default in jest
// no import required.
// if globals were turned off, I would need to import these functions from jest
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
