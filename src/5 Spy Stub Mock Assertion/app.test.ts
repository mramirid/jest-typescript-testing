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
});
