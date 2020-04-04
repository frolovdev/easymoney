export function assert(
  condition: boolean,
  err: Error = new Error()
): asserts condition {
  if (!condition) throw err;
}
