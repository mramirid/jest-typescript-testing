export async function asyncThrowOrNot(shouldThrow = false) {
  if (shouldThrow) {
    throw new Error("shouldThrow was true");
  }
  return "success";
}
