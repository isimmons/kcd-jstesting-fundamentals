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
