import { SavedTodos, Todo } from "./types";

const data: SavedTodos = {};

async function get(key: string) {
  return data[key];
}

async function set(key: string, value: Todo) {
  data[key] = value;
}

export default {
  get,
  set,
};
