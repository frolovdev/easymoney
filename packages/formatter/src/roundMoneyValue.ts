import { setCharAt } from "./setChar";

//  /**
//      * @param string $moneyValue
//      * @param int    $targetDigits
//      * @param int    $havingDigits
//      *
//      * @return string
//      */
//     public static function roundMoneyValue($moneyValue, $targetDigits, $havingDigits)
//     {
//         $valueLength = strlen($moneyValue);
//         $shouldRound = $targetDigits < $havingDigits && $valueLength - $havingDigits + $targetDigits > 0;

//         if ($shouldRound && $moneyValue[$valueLength - $havingDigits + $targetDigits] >= 5) {
//             $position = $valueLength - $havingDigits + $targetDigits;
//             $addend = 1;

//             while ($position > 0) {
//                 $newValue = (string) ((int) $moneyValue[$position - 1] + $addend);

//                 if ($newValue >= 10) {
//                     $moneyValue[$position - 1] = $newValue[1];
//                     $addend = $newValue[0];
//                     --$position;
//                     if ($position === 0) {
//                         $moneyValue = $addend.$moneyValue;
//                     }
//                 } else {
//                     if ($moneyValue[$position - 1] === '-') {
//                         $moneyValue[$position - 1] = $newValue[0];
//                         $moneyValue = '-'.$moneyValue;
//                     } else {
//                         $moneyValue[$position - 1] = $newValue[0];
//                     }

//                     break;
//                 }
//             }
//         }

//         return $moneyValue;
//     }

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
}
