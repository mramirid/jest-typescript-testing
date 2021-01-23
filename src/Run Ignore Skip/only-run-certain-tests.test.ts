describe("Using .only to run only certain tests", () => {
  describe("Single test.only", () => {
    test.only("Case A", () => {
      expect(1 + 1).toEqual(2);
    });
    test("Case B", () => {
      expect(1 + 1).toEqual(1);
    });
  });

  describe("Multiple test.only", () => {
    test.only("Case A", () => {
      expect(1 + 1).toEqual(2);
    });
    test.only("Case B", () => {
      expect(1 + 2).toEqual(3);
    });
    test("Case C", () => {
      expect(1 + 1).toEqual(1);
    });
  });

  describe("Single describe.only", () => {
    describe.only("Suite A", () => {
      test.only("Case A", () => {
        expect(1 + 1).toEqual(2);
      });
    });
    describe("Suite B", () => {
      test("Case A", () => {
        expect(1 + 1).toEqual(1);
      });
    });
  });

  describe("Multiple describe.only", () => {
    describe.only("Suite A", () => {
      test("Case A", () => {
        expect(1 + 1).toEqual(2);
      });
    });
    describe.only("Suite B", () => {
      test("Case A", () => {
        expect(1 + 2).toEqual(3);
      });
    });
    describe("Suite C", () => {
      test("Case A", () => {
        expect(1 + 1).toEqual(1);
      });
    });
  });
});
