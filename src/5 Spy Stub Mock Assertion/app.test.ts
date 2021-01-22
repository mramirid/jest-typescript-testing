describe("Spy Stub Mock Assertion", () => {
  const myObj = {
    doSomething() {
      console.log("does something");
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Assert a stub/spy has been called", () => {
    test("stub .toBeCalled()", () => {
      const stub = jest.fn();
      stub();
      expect(stub).toBeCalled();
    });

    test("spyOn .toBeCalled()", () => {
      const somethingSpy = jest.spyOn(myObj, "doSomething");
      myObj.doSomething();
      expect(somethingSpy).toBeCalled();
    });
  });

  describe("Replace a spied-on function’s implementation", () => {
    test("spyOn().mockImplementation()", () => {
      const somethingSpy = jest
        .spyOn(myObj, "doSomething")
        .mockImplementation();
      myObj.doSomething();
      expect(somethingSpy).toBeCalled();
    });

    test("spyOn().mockReturnValue()", () => {
      const somethingSpy = jest.spyOn(myObj, "doSomething").mockReturnValue();
      myObj.doSomething();
      expect(somethingSpy).toBeCalled();
    });
  });
});
