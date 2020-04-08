export function isNumeric(value: any) {
  return !isNaN(parseInt(value)) && isFinite(value);
}
