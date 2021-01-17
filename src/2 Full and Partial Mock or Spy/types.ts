export interface InputTodo {
  name: string;
}

export interface Todo extends InputTodo {
  id: number;
}

export interface SavedTodos {
  key?: Todo;
  [key: string]: Todo;
}
