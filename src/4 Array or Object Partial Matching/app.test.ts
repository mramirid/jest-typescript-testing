describe("Array/Object partial match with objectContaining and arrayContaining", () => {
  describe("Simple object partial matching", () => {
    test("id should match", () => {
      const obj = {
        id: "111",
        productName: "Jest Handbook",
        url: "https://jesthandbook.com",
      };
      expect(obj).toEqual(
        expect.objectContaining({
          id: "111",
        })
      );
    });

    it("Should have right id and name", () => {
      const user = {
        id: 1,
        friends: [],
        name: "Hugo",
        url: "https://codewithhugo.com",
      };
      expect(user).toEqual(
        expect.objectContaining({
          id: 1,
          name: "Hugo",
        })
      );
    });
  });

  describe("Simple Array partial matching", () => {
    it("Should contain the desired values", () => {
      const oddArray = [1, 3, 5, 7, 9, 11, 13];
      expect(oddArray).toEqual(expect.arrayContaining([1, 3, 5, 7, 9]));
    });
  });
});
