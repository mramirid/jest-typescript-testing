import db from "./db";
import lib from "./lib";
import { Todo } from "./types";

jest.mock("./db");
const mockedDB = db as jest.Mocked<typeof db>;

describe("Mocking the dependency module", () => {
  test("addTodo > inserts with new id", async () => {
    await lib.addTodo({ name: "New Todo" });
    expect(mockedDB.set).toHaveBeenCalledWith("todos/1", {
      id: 1,
      name: "New Todo",
    });
  });

  test("getTodo > returns output of db.get", async () => {
    const expected: Todo = {
      id: 1,
      name: "New Todo",
    };
    mockedDB.get.mockResolvedValueOnce(expected);

    const result = await lib.getTodo(1);

    expect(mockedDB.get).toHaveBeenCalledWith("todos/1");
    expect(result).toEqual(expected);
  });
});
