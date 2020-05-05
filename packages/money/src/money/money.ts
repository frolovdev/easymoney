import { bind, Money, AnyCurrencyUnit } from "@easymoney/core";
import { MoneyInput } from "./types";

import { RoundingModes, RoundingModesType } from "@easymoney/core";
import { assert } from "@easymoney/core";
import { isNumeric } from "../assert";
import { CalculatorBase } from "../calculator/";
import { MoneyBase } from "./types";
import { fromString, fromNumber } from "../number";
import { PrivateInstance, Instance } from "./types";

function construct<CT>(
  amount: MoneyInput<CT>["amount"],
  currency: MoneyInput<CT>["currency"]
): Money<CT> {
  let newAmount: string | null = null;
  if (!Number.isInteger(Number(amount))) {
    let numberFromString = fromString((amount as unknown) as string);
    if (!numberFromString.isInteger()) {
      throw new Error("Amount must be an integer(ish) value");
    }

    newAmount = numberFromString.getIntegerPart();
  }

  return {
    amount: newAmount ? newAmount : fromString(String(amount)).toString(),
    currency
  };
}

const createMoneyFactory = (calculator: CalculatorBase) => <CT>({
  amount,
  currency
}: MoneyInput<CT>) => {
  const money = construct(amount, currency);
  const privateInstance = {
    calculator,
    instanceMoney: money
  } as PrivateInstance<CT>;

  privateInstance.round = bind(round, privateInstance);

  const publicInstance = {} as MoneyBase<CT>;

  const instance: Instance<CT> = { privateInstance, publicInstance };

  publicInstance.add = bind(add, instance);
  publicInstance.isSameCurrency = bind(isSameCurrency, publicInstance);
  publicInstance.getAmount = bind(getAmount, privateInstance);
  publicInstance.getCurrency = bind(getCurrency, privateInstance);
  publicInstance.equals = bind(equals, instance);
  publicInstance.compare = bind(compare, instance);
  publicInstance.greaterThan = bind(greaterThan, publicInstance);
  publicInstance.greaterThanOrEqual = bind(greaterThanOrEqual, publicInstance);
  publicInstance.lessThan = bind(lessThan, publicInstance);
  publicInstance.lessThanOrEqual = bind(lessThanOrEqual, publicInstance);
  publicInstance.subtract = bind(subtract, instance);
  publicInstance.multiply = bind(multiply, instance);
  publicInstance.divide = bind(divide, instance);
  publicInstance.allocate = bind(allocate, instance);
  publicInstance.allocateTo = bind(allocateTo, instance);
  publicInstance.mod = bind(mod, instance);
  publicInstance.absolute = bind(absolute, instance);
  publicInstance.negative = bind(negative, instance);
  publicInstance.isZero = bind(isZero, instance);
  publicInstance.isPositive = bind(isPositive, instance);
  publicInstance.isNegative = bind(isNegative, instance);
  publicInstance.ratioOf = bind(ratioOf, instance);

  return publicInstance;
};

export function createMoneyUnit(calculator: CalculatorBase) {
  return createMoneyFactory(calculator);
}

function round<CT>(
  privateInstance: PrivateInstance<CT>,
  amount: string,
  roundingMode: RoundingModesType
) {
  assertRoundingMode(roundingMode);

  const { calculator } = privateInstance;

  if (roundingMode === RoundingModes.CEILING) {
    return calculator.ceil(amount);
  }

  if (roundingMode === RoundingModes.FLOOR) {
    return calculator.floor(amount);
  }

  return calculator.round(amount, roundingMode);
}

function add<CT>(instance: Instance<CT>, money: MoneyBase<CT>) {
  const { publicInstance, privateInstance } = instance;

  const { calculator, instanceMoney } = privateInstance;

  assertSameCurrency(publicInstance, money);

  const newAmount = calculator.add(money.getAmount(), instanceMoney.amount);

  return createMoneyFactory(privateInstance.calculator)({
    amount: newAmount,
    currency: money.getCurrency()
  });
}

function subtract<CT>(instance: Instance<CT>, money: MoneyBase<CT>) {
  const { publicInstance, privateInstance } = instance;

  const { calculator } = privateInstance;

  assertSameCurrency(publicInstance, money);

  const newAmount = calculator.subtract(
    publicInstance.getAmount(),
    money.getAmount()
  );

  return createMoneyFactory(privateInstance.calculator)({
    amount: newAmount,
    currency: money.getCurrency()
  });
}

function getAmount<CT>(privateInstance: PrivateInstance<CT>) {
  return privateInstance.instanceMoney.amount;
}

function getCurrency<CT>(privateInstance: PrivateInstance<CT>) {
  return privateInstance.instanceMoney.currency;
}

function isSameCurrency<CT>(
  moneyInstance: MoneyBase<CT>,
  money: MoneyBase<CT>
): boolean {
  return moneyInstance.getCurrency() === money.getCurrency();
}

function assertSameCurrency<CT>(
  moneyInstance: MoneyBase<CT>,
  money: MoneyBase<CT>
) {
  assert(
    isSameCurrency(moneyInstance, money),
    new TypeError("Currencies must be identical")
  );
}

function equals<CT>(moneyInstance: Instance<CT>, money: MoneyBase<CT>) {
  return (
    moneyInstance.publicInstance.isSameCurrency(money) &&
    moneyInstance.privateInstance.instanceMoney.amount === money.getAmount()
  );
}

function compare<CT>(instance: Instance<CT>, money: MoneyBase<CT>) {
  const { publicInstance, privateInstance } = instance;

  assertSameCurrency(publicInstance, money);

  return privateInstance.calculator.compare(
    privateInstance.instanceMoney.amount,
    money.getAmount()
  );
}

function greaterThan<CT>(publicInstance: MoneyBase<CT>, money: MoneyBase<CT>) {
  return publicInstance.compare(money) > 0;
}

function greaterThanOrEqual<CT>(
  publicInstance: MoneyBase<CT>,
  money: MoneyBase<CT>
) {
  return publicInstance.compare(money) >= 0;
}

function lessThan<CT>(publicInstance: MoneyBase<CT>, money: MoneyBase<CT>) {
  return publicInstance.compare(money) < 0;
}

function lessThanOrEqual<CT>(
  publicInstance: MoneyBase<CT>,
  money: MoneyBase<CT>
) {
  return publicInstance.compare(money) <= 0;
}

function multiply<CT>(
  instance: Instance<CT>,
  multiplier: string | number,
  roundingMode: RoundingModesType = RoundingModes.HALF_EVEN
) {
  assertOperand(multiplier);
  assertRoundingMode(roundingMode);

  const { publicInstance, privateInstance } = instance;

  const { calculator } = privateInstance;

  const newAmount = calculator.multiply(publicInstance.getAmount(), multiplier);

  const roundedAmount = privateInstance.round(newAmount, roundingMode);

  return createMoneyFactory(privateInstance.calculator)({
    amount: roundedAmount,
    currency: publicInstance.getCurrency()
  });
}

function assertOperand(operand: string | number): asserts operand is number {
  assert(
    isNumeric(operand),
    new TypeError("Operand should be a numeric value.")
  );
}

function assertRoundingMode(roundingMode: any): asserts roundingMode {
  assert(
    [
      RoundingModes.CEILING,
      RoundingModes.DOWN,
      RoundingModes.FLOOR,
      RoundingModes.HALF_DOWN,
      RoundingModes.HALF_EVEN,
      RoundingModes.HALF_UP,
      RoundingModes.UP
    ].includes(roundingMode),
    new TypeError(
      "rounding mode should be one of RoundingModes.CEILING RoundingModes.DOWN RoundingModes.FLOOR RoundingModes.HALF_DOWN RoundingModes.HALF_EVEN RoundingModes.HALF_UP RoundingModes.UP"
    )
  );
}

function divide<CT>(
  instance: Instance<CT>,
  divisor: string | number,
  roundingMode: RoundingModesType = RoundingModes.HALF_EVEN
) {
  assertOperand(divisor);
  assertRoundingMode(roundingMode);

  const { privateInstance, publicInstance } = instance;

  const { round, calculator } = privateInstance;

  const result = fromNumber(divisor).toString();

  if (calculator.compare(result, "0") === 0) {
    throw new TypeError("Division by zero");
  }

  const quotient = round(
    calculator.divide(publicInstance.getAmount(), result),
    roundingMode
  );

  return createMoneyFactory(calculator)({
    amount: quotient,
    currency: publicInstance.getCurrency()
  });
}

function allocate<CT>(instance: Instance<CT>, ratios: number[]) {
  if (ratios.length === 0) {
    throw new TypeError(
      "Cannot allocate to none, ratios cannot be an empty array"
    );
  }

  const { privateInstance, publicInstance } = instance;

  const { calculator } = privateInstance;
  let reminder = publicInstance.getAmount();
  const results = [];

  const total = ratios.reduce((acc, val) => acc + val, 0);

  if (total <= 0) {
    throw new TypeError(
      "Cannot allocate to none, sum of ratios must be greater than zero"
    );
  }

  for (let i = 0; i < ratios.length; i++) {
    const ratio = ratios[i];

    if (ratio < 0) {
      throw new TypeError(
        "Cannot allocate to none, ratio must be zero or positive"
      );
    }

    const share = calculator.share(publicInstance.getAmount(), ratio, total);

    results[i] = share;

    reminder = calculator.subtract(reminder, share);
  }

  if (calculator.compare(reminder, "0") === 0) {
    return results.map(result =>
      createMoneyFactory(calculator)({
        amount: result,
        currency: publicInstance.getCurrency()
      })
    );
  }

  const fractions = ratios.map(ratio => {
    const share = (ratio / total) * Number(publicInstance.getAmount());

    return share - Math.floor(share);
  });

  while (calculator.compare(reminder, "0") > 0) {
    let index: number;

    if (fractions.length !== 0) {
      let array: number[] = [];

      fractions.forEach((fraction, fractIndex) => {
        if (fraction === Math.max(...fractions)) {
          array.push(fractIndex);
        }
      });

      index = array[0];
    } else {
      index = 0;
    }

    results[index] = calculator.add(results[index], "1");

    reminder = calculator.subtract(reminder, "1");

    fractions[index] = 0;
  }

  return results.map(result =>
    createMoneyFactory(calculator)({
      amount: result,
      currency: publicInstance.getCurrency()
    })
  );
}

function allocateTo<CT>(instance: Instance<CT>, n: number) {
  if (!Number.isInteger(n)) {
    throw new TypeError("Number of targets must be an integer");
  }

  if (n <= 0) {
    throw new TypeError(
      "Cannot allocate to none, target must be greater than zero"
    );
  }

  return instance.publicInstance.allocate(Array(n).fill(1));
}

function mod<CT>(instance: Instance<CT>, divisor: MoneyBase<CT>) {
  assertSameCurrency(instance.publicInstance, divisor);

  const { publicInstance, privateInstance } = instance;

  const { calculator } = privateInstance;

  const newAmount = calculator.mod(
    publicInstance.getAmount(),
    divisor.getAmount()
  );

  return createMoneyFactory(privateInstance.calculator)({
    amount: newAmount,
    currency: publicInstance.getCurrency()
  });
}

function absolute<CT>(instance: Instance<CT>) {
  const { privateInstance, publicInstance } = instance;
  return createMoneyFactory(privateInstance.calculator)({
    amount: privateInstance.calculator.absolute(publicInstance.getAmount()),
    currency: publicInstance.getCurrency()
  });
}

function negative<CT>(instance: Instance<CT>) {
  const { privateInstance, publicInstance } = instance;
  const { calculator } = privateInstance;

  const newAmount = calculator.subtract("0", publicInstance.getAmount());
  return createMoneyFactory(calculator)({
    amount: newAmount,
    currency: publicInstance.getCurrency()
  });
}

function isZero<CT>(instance: Instance<CT>) {
  const { privateInstance, publicInstance } = instance;
  const { calculator } = privateInstance;

  return calculator.compare(publicInstance.getAmount(), "0") === 0;
}

function isPositive<CT>(instance: Instance<CT>) {
  const { privateInstance, publicInstance } = instance;
  const { calculator } = privateInstance;

  return calculator.compare(publicInstance.getAmount(), "0") > 0;
}

function isNegative<CT>(instance: Instance<CT>) {
  const { privateInstance, publicInstance } = instance;
  const { calculator } = privateInstance;

  return calculator.compare(publicInstance.getAmount(), "0") < 0;
}

function ratioOf<CT>(instance: Instance<CT>, money: MoneyBase<CT>) {
  if (money.isZero()) {
    throw new TypeError("Cannot calculate a ratio of zero");
  }

  const { privateInstance, publicInstance } = instance;
  const { calculator } = privateInstance;

  return calculator.divide(publicInstance.getAmount(), money.getAmount());
}
