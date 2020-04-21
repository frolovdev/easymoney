export function lpad(str: string, padString: string, length: number) {
  let newStr = str;
  while (newStr.length < length) newStr = padString + newStr;
  return newStr;
}
