app = require("../app.js");

describe("basic operations", () => {
  test("should return 10, if arguments are 5 and 5", () => {
    let result = app.sum(5, 5);
    expect(result).toEqual(10);
  });

  test("should be return 0, if arguments are 5 and 5 ", () => {
    let result = app.sub(5, 5);
    expect(result).toEqual(0);
  });

  test("should be return 25, if arguments are 5 and 5", () => {
    let result = app.mul(5, 5);
    expect(result).toEqual(25);
  });

  test("should be return 1, if arguments are 5 and 5", () => {
    let result = app.div(5, 5);
    expect(result).toEqual(1);
  });
});

describe("advanced operations", () => {
  test("should be return 25, if arguments are 5 and 2", () => {
    let result = app.pow(5, 2);
    expect(result).toEqual(25);
  });

  test("should be return 2, if argument is 4", () => {
    let result = app.sqrt(4);
    expect(result).toEqual(2);
  });
});
