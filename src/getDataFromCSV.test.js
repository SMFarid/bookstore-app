const readFile = require("./getDataFromCSV");

test("checks returned array is not null", () => {
  expect(readFile()).toBe(true);
});
