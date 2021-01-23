describe("Jest Mock Function with jest.fn()", () => {
  test("Creating a Mock Function instance is with jest.fn()", () => {
    const mock = jest.fn();

    const result = mock("foo");

    expect(result).toBeUndefined();
    expect(mock).toBeCalled();
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith("foo");
  });

  test("Mock implementation", () => {
    const mock = jest.fn((msg: string) => msg);

    expect(mock("foo")).toBe("foo");
    expect(mock).toBeCalledWith("foo");
  });

  test("Also mock implementation", () => {
    const mock = jest.fn().mockImplementation(() => "bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toBeCalledWith("foo");
  });

  test("Mock implementation one time", () => {
    const mock = jest.fn().mockImplementationOnce(() => "bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toBeCalledWith("foo");

    expect(mock("baz")).toBe(undefined);
    expect(mock).toBeCalledWith("baz");
  });

  test("Mock return value", () => {
    const mock = jest.fn();
    mock.mockReturnValue("bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toBeCalledWith("foo");
  });

  test("Mock promise resolution", () => {
    const mock = jest.fn();
    mock.mockResolvedValue("bar");

    expect(mock("foo")).resolves.toBe("bar");
    expect(mock).toBeCalledWith("foo");
  });
});

describe("Dependency Injection", () => {
  const doAdd = (a: number, b: number, printIt: (result: number) => void) => {
    printIt(a + b);
  };

  test("Talls callback with arguments added", () => {
    const mockCallback = jest.fn();
    doAdd(1, 2, mockCallback);
    expect(mockCallback).toBeCalledWith(3);
  });
});
