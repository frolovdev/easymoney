export function isNumeric(value: any) {
  return !isNaN(parseInt(value)) && isFinite(value);
}

export function assert(
  condition: boolean,
  err: Error = new Error()
): asserts condition {
  if (!condition) throw err;
}
