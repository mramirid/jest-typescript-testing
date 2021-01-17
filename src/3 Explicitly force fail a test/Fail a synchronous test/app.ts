export function throwOrNot(shouldThrow = false) {
  if (shouldThrow) {
    throw new Error("shouldThrow was true");
  }
  return "success";
}
