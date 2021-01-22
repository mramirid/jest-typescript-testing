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

  describe("Asserting a stub/spy has not been called", () => {
    test("jest.fn().not.toBeCalled()", () => {
      const stub = jest.fn();
      expect(stub).not.toBeCalled();
    });

    test("jest.spyOn().not.toBeCalled()", () => {
      const somethingSpy = jest.spyOn(myObj, "doSomething").mockReturnValue();
      expect(somethingSpy).not.toBeCalled();
    });
  });

  describe("Asserting on a stub/spy call count", () => {
    const counter = {
      count: 0,
      increment() {
        this.count++;
      },
      getCount() {
        return this.count;
      },
    };
    const doIncrement = (ctr: typeof counter) => {
      ctr.increment();
    };

    test("doIncrement() with mocked counter .toBeCalledTimes(1)", () => {
      const mockedCounter = {
        ...counter,
        increment: jest.fn(),
      };
      doIncrement(mockedCounter);
      expect(mockedCounter.increment).toBeCalledTimes(1);
    });

    test("doIncrement() with jest.spyOn(counter) .toBeCalledTimes(1)", () => {
      const incrementSpy = jest.spyOn(counter, "increment");
      doIncrement(counter);
      expect(incrementSpy).toBeCalledTimes(1);
      expect(counter.getCount()).toEqual(1);
    });
  });
});
