const { sum, subtract } = require("../math");

let result, expected;

result = sum(3, 7);
expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

result = 2;
expect(result).toBeOfType("number");

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      } else {
        console.log("✓ passed");
      }
    },
    toBeOfType(type) {
      if (typeof actual !== type) {
        throw new Error(`${actual} is not of type ${type}`);
      } else {
        console.log("✓ passed");
      }
    },
  };
}
