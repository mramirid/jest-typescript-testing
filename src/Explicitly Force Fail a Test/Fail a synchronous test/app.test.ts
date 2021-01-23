import { throwOrNot } from "./app";

describe("Fail a synchronous test", () => {
  it("Should throw if passed true", () => {
    try {
      throwOrNot(false);
      throw new Error("Didn't throw");
    } catch (error) {
      expect(error).toEqual(new Error("shouldThrow was true"));
    }
  });

  test("Idiomatic failing Jest: check a function throws using the .toThrow Jest matcher", () => {
    expect(throwOrNot.bind(null, false)).toThrow(
      new Error("shouldThrow was true")
    );
  });

  describe("Fail a synchronous test that shouldn’t throw", () => {
    it("Should not throw", () => {
      throw new Error("it threw");
    });
  });
});
