describe("Reset/Clear with beforeEach/beforeAll and clearAllMocks/resetAllMocks", () => {
  describe("Clearing Jest Mocks with .mockClear(), jest.clearAllMocks() and beforeEach", () => {
    const mockFn = jest.fn();

    function fnUnderTest(arg: string) {
      mockFn(arg);
    }

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Testing once", () => {
      fnUnderTest("first-call");
      expect(mockFn).toHaveBeenCalledWith("first-call");
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test("Testing twice", () => {
      fnUnderTest("second-call");
      expect(mockFn).toHaveBeenCalledWith("second-call");
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});

describe("Setting a mock/stub/spy's implementation with mockImplementation/mockImplementationOnce", () => {
  describe("Basic mockImplementation/mockImplementationOnce", () => {
    const mockFn = jest.fn();

    function fnUnderTest(arg: string) {
      return mockFn(arg) ? "Truth" : "Falsehood";
    }

    test("It should return correct output on true response from mockFn", () => {
      mockFn.mockImplementationOnce(() => true);
      expect(fnUnderTest("will-it-work")).toEqual("Truth");
    });

    test("It should return correct output on false response from mockFn", () => {
      mockFn.mockImplementation(() => false);
      expect(fnUnderTest("will-it-work")).toEqual("Falsehood");
    });
  });

  describe("mockImplementationOnce for multiple subsequent calls", () => {
    const fetch = jest.fn();

    async function data() {
      const data = await fetch("/endpoint-1");
      await fetch(`/endpoint-2/${data.id}`, {
        method: "POST",
      });
    }

    test("It should call endpoint-1 followed by POST to endpoint-2 with id", async () => {
      fetch.mockImplementationOnce(async () => ({ id: "my-id" }));
      fetch.mockImplementationOnce(async () => {});
      await data();
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(fetch).toHaveBeenCalledWith("/endpoint-1");
      expect(fetch).toHaveBeenCalledWith("/endpoint-2/my-id", {
        method: "POST",
      });
    });
  });
});

describe("Overriding mock/spy's output", () => {
  describe("Overriding a synchronous mock/spy's output with mockReturnValue/mockReturnValueOnce", () => {
    const format = jest.fn();

    function getName(firstName: string, ...otherNames: string[]) {
      const restOfNames = otherNames.reduce((fullName, curName) => {
        return fullName ? `${fullName} ${format(curName)}` : format(curName);
      }, "");
      return `${format(firstName)} ${restOfNames}`;
    }

    it("Should work for multiple calls", () => {
      format.mockReturnValue("default");
      format.mockReturnValueOnce("Amir");
      format.mockReturnValueOnce("Muhammad");
      format.mockReturnValueOnce("Hakim");

      const actual = getName("first-name", "mid-name", "last-name");

      expect(format).toHaveBeenCalledTimes(3);
      expect(actual).toEqual("Hakim Amir Muhammad");
      expect(format()).toEqual("default");
    });
  });

  describe("Overriding an async mock/spy’s output with mockResolvedValue/mockResolvedValueOnce", () => {
    const fetch = jest.fn();

    async function data() {
      const data = await fetch("/endpoint-1");
      await fetch(`/endpoint-2/${data.id}`, {
        method: "POST",
      });
    }

    test("Only mockResolvedValueOnce should work (in order)", async () => {
      fetch.mockResolvedValue({ data: {} });
      fetch.mockResolvedValueOnce({ id: "my-id" });
      fetch.mockResolvedValueOnce({});

      await data();

      expect(fetch).toHaveBeenCalledTimes(2);
      expect(fetch).toHaveBeenCalledWith("/endpoint-1");
      expect(fetch).toHaveBeenCalledWith("/endpoint-2/my-id", {
        method: "POST",
      });
      expect(await fetch()).toEqual({
        data: {},
      });
    });
  });
});
