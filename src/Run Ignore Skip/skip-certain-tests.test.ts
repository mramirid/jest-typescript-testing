describe("Using .skip to ignore Jest tests or suites", () => {
  describe("Single test.skip", () => {
    test("Case A", () => {
      expect(1 + 1).toEqual(2);
    });
    test.skip("Case B", () => {
      expect(1 + 1).toEqual(1);
    });
  });

  describe("Multiple test.skip", () => {
    test("Case A", () => {
      expect(1 + 1).toEqual(2);
    });
    test.skip("Case B", () => {
      expect(1 + 2).toEqual(3);
    });
    test.skip("Case C", () => {
      expect(1 + 1).toEqual(1);
    });
  });

  describe("Single describe.skip", () => {
    describe("Suite A", () => {
      test("Case A", () => {
        expect(1 + 1).toEqual(2);
      });
    });

    describe.skip("Suite B", () => {
      test("Case A", () => {
        expect(1 + 1).toEqual(1);
      });
    });
  });

  describe("Multiple describe.skip", () => {
    describe("Suite A", () => {
      test("Case A", () => {
        expect(1 + 1).toEqual(2);
      });
    });
    describe.skip("Suite B", () => {
      test("Case B", () => {
        expect(1 + 2).toEqual(4);
      });
    });
    describe.skip("Suite C", () => {
      test("Case C", () => {
        expect(1 + 1).toEqual(1);
      });
    });
  });
});
