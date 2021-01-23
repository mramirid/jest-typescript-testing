import app from "./app";
import math from "./math";

describe("Mock a function with jest.fn", () => {
  beforeAll(() => {
    math.add = jest.fn();
    math.subtract = jest.fn();
  });

  test("Calls math.add", () => {
    app.doAdd(1, 2);
    expect(math.add).toBeCalledWith(1, 2);
  });

  test("Calls math.subtract", () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toBeCalledWith(1, 2);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
