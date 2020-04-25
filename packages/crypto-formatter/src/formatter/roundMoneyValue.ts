import { setCharAt } from "./setChar";

export function roundMoneyValue(
  moneyValue: string,
  targetDigits: number,
  havingDigits: number
) {
  // just copy the variable
  let scopedMoneyValue = moneyValue;
  const valueLength = scopedMoneyValue.length;
  const isShouldRound =
    targetDigits < havingDigits &&
    valueLength - havingDigits + targetDigits > 0;

  if (
    isShouldRound &&
    Number(scopedMoneyValue[valueLength - havingDigits + targetDigits]) >= 5
  ) {
    let position = valueLength - havingDigits + targetDigits;
    let addend = 1;

    while (position > 0) {
      let newValue = Number(scopedMoneyValue[position - 1]) + addend;
      let strigifiedNewValue = String(newValue);

      if (newValue >= 10) {
        strigifiedNewValue = setCharAt(
          strigifiedNewValue,
          position - 1,
          strigifiedNewValue[0]
        );
        addend = Number(strigifiedNewValue[0]);
        position--;

        if (position === 0) {
          scopedMoneyValue = String(addend).concat(strigifiedNewValue);
        }
      } else {
        if (scopedMoneyValue[position - 1] === "") {
          scopedMoneyValue = setCharAt(
            scopedMoneyValue,
            position - 1,
            strigifiedNewValue[0]
          );
          scopedMoneyValue = String(-scopedMoneyValue);
        } else {
          scopedMoneyValue = setCharAt(
            scopedMoneyValue,
            position - 1,
            strigifiedNewValue[0]
          );
        }

        break;
      }
    }
  }

  return scopedMoneyValue;
}
