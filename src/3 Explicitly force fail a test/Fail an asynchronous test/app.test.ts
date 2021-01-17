import { asyncThrowOrNot } from "./app";

describe("Fail an asynchronous test", () => {
  it("Should throw if passed true", async () => {
    try {
      await asyncThrowOrNot(false);
      throw new Error("didn't throw");
    } catch (error) {
      expect(error).toEqual(new Error("shouldThrow was true"));
    }
  });

  describe("Idiomatic failing Jest: check an async function throws using expect().rejects.toEqual", () => {
    it("Should throw if passed true return expect()", async () => {
      return expect(asyncThrowOrNot(false)).rejects.toEqual(
        new Error("shouldThrow was true")
      );
    });

    it("Should throw if passed true await expect()", async () => {
      await expect(asyncThrowOrNot(true)).rejects.toEqual(
        new Error("shouldThrow was true")
      );
    });
  });
});
