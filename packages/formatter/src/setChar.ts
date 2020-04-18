export function setCharAt(str: string, index: number, char: string) {
  if (index > str.length - 1) return str;

  return str
    .substr(0, index)
    .concat(char)
    .concat(str.substr(index + 1));
}
