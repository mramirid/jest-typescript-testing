import db from "./db";
import { InputTodo, Todo } from "./types";

const keyPrefix = "todos";
const makeKey = (key: number) => `${keyPrefix}/${key}`;

let autoId = 1;

function addTodo(inputTodo: InputTodo) {
  const id = autoId++;
  const newTodo: Todo = {
    id,
    ...inputTodo,
  };
  return db.set(makeKey(id), newTodo);
}

function getTodo(id: number) {
  return db.get(makeKey(id));
}

export default {
  addTodo,
  getTodo,
};
