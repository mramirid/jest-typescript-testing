import app from "./app";
import math from "./math";

describe("Spy or mock a function with jest.spyOn", () => {
  test("Calls to the math.add, but leave the original implementation in place", () => {
    const addMock = jest.spyOn(math, "add");

    // Calls the original implementation
    expect(app.doAdd(1, 2)).toEqual(3);

    // And the spy stores the calls to add
    expect(addMock).toHaveBeenCalledWith(1, 2);
  });

  test("Mock the math.add, but then restore the original implementation", () => {
    const addMock = jest.spyOn(math, "add");

    // Override the implementation
    addMock.mockImplementation(() => 100);
    expect(app.doAdd(1, 2)).toEqual(100);

    // Restore the original implementation
    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
  });
});
