import app from "./app";
import math from "./math";

jest.mock("./math");

describe("Mock a module with jest.mock", () => {
  test("Calls math.add", () => {
    app.doAdd(1, 2);
    expect(math.add).toBeCalledWith(1, 2);
  });

  test("Calls math.subtract", () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toBeCalledWith(1, 2);
  });
});
