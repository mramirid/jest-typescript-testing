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

  describe("Fail an async/await Jest test that shouldn’t throw", () => {
    it("Should not top-level throw", async () => {
      throw new Error("it threw");
    });

    it("Should not throw on Promise rejection", async () => {
      await Promise.reject(new Error("Promise rejection"));
    });

    it("Should not throw on async function throw", async () => {
      const throws = async () => {
        throw new Error("async-function throw");
      };
      await throws();
    });
  });
});
