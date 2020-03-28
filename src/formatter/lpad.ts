export function lpad(str: string, padString: string, length: number) {
  let newStr = str;
  while (str.length < length) str = padString + str;
  return newStr;
}
