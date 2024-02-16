const { sum, subtract } = require("../math");

let result, expected;

result = sum(3, 7);
expected = 10;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  console.log("Test: sum");
  console.log("✓ passed");
}

result = subtract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  console.log("Test: subtract");
  console.log("✓ passed");
}
