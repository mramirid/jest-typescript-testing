import math from "./math";
import { CalcFunction } from "./types";

const doAdd: CalcFunction = (a, b) => math.add(a, b);

const doSubtract: CalcFunction = (a, b) => math.subtract(a, b);

const doMultiply: CalcFunction = (a, b) => math.multiply(a, b);

const doDivide: CalcFunction = (a, b) => math.divide(a, b);

export default {
  doAdd,
  doSubtract,
  doMultiply,
  doDivide,
};
