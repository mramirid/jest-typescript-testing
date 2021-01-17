import db from "./db";
import lib from "./lib";
import { Todo } from "./types";

describe("Mock/Spy setup internal functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("addTodo > inserts with new id", async () => {
    const dbSetSpy = jest.spyOn(db, "set").mockImplementation(async () => {});
    await lib.addTodo({ name: "New Todo" });
    expect(dbSetSpy).toHaveBeenCalledWith("todos/1", {
      id: 1,
      name: "New Todo",
    });
  });

  test("getTodo > returns output of db.get", async () => {
    const expected: Todo = {
      id: 1,
      name: "todo-1",
    };
    const dbGetSpy = jest.spyOn(db, "get").mockResolvedValueOnce(expected);

    const result = await lib.getTodo(1);

    expect(dbGetSpy).toHaveBeenCalledWith("todos/1");
    expect(result).toEqual(expected);
  });
});
