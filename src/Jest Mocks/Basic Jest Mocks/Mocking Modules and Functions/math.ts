import { CalcFunction } from "./types";

const add: CalcFunction = (a, b) => a + b;

const subtract: CalcFunction = (a, b) => b - a;

const multiply: CalcFunction = (a, b) => a * b;

const divide: CalcFunction = (a, b) => b / a;

export default {
  add,
  subtract,
  multiply,
  divide,
};
