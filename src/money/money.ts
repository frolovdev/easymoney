import { MoneyInput, Money } from "../core/types";
import { bind } from "../utils/bind";

import { RoundingModes, RoundingModesType } from "../consts/rounding-modes";
import { isNumeric, assert } from "../utils/assert";
import { CalculatorBase } from "../calculator";
import { fromString, fromNumber } from "../number";
import { MoneyBase, PrivateInstance, Instance, CreateMoney } from "./types";

function construct(
  amount: MoneyInput["amount"],
  currency: MoneyInput["currency"]
): Money {
  let newAmount: string | null = null;
  if (!Number.isInteger(Number(amount))) {
    let numberFromString = fromString((amount as unknown) as string);
    if (!numberFromString.isInteger()) {
      throw new Error("Amount must be an integer(ish) value");
    }

    newAmount = numberFromString.getIntegerPart();
  }

  return {
    amount: newAmount ? newAmount : String(Number.parseInt(String(amount))),
    currency
  };
}

function createMoneyFactory(
  calculator: CalculatorBase,
  { amount, currency }: MoneyInput
) {
  const money = construct(amount, currency);
  const privateInstance = {
    calculator,
    instanceMoney: money
  } as PrivateInstance;

  privateInstance.round = bind(round, privateInstance);

  const publicInstance = {} as MoneyBase;

  const instance: Instance = { privateInstance, publicInstance };

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
}

export function createMoneyUnit(calculator: CalculatorBase): CreateMoney {
  return createMoneyFactory.bind(null, calculator);
}

function round(
  privateInstance: PrivateInstance,
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

function add(instance: Instance, money: MoneyBase) {
  const { publicInstance, privateInstance } = instance;

  const { calculator, instanceMoney } = privateInstance;

  assertSameCurrency(publicInstance, money);

  const newAmount = calculator.add(money.getAmount(), instanceMoney.amount);

  return createMoneyFactory(privateInstance.calculator, {
    amount: newAmount,
    currency: money.getCurrency()
  });
}

function subtract(instance: Instance, money: MoneyBase) {
  const { publicInstance, privateInstance } = instance;

  const { calculator } = privateInstance;

  assertSameCurrency(publicInstance, money);

  const newAmount = calculator.subtract(
    publicInstance.getAmount(),
    money.getAmount()
  );

  return createMoneyFactory(privateInstance.calculator, {
    amount: newAmount,
    currency: money.getCurrency()
  });
}

function getAmount(privateInstance: PrivateInstance) {
  return privateInstance.instanceMoney.amount;
}

function getCurrency(privateInstance: PrivateInstance) {
  return privateInstance.instanceMoney.currency;
}

function isSameCurrency(moneyInstance: MoneyBase, money: MoneyBase): boolean {
  return moneyInstance.getCurrency() === money.getCurrency();
}

function assertSameCurrency(moneyInstance: MoneyBase, money: MoneyBase) {
  assert(
    isSameCurrency(moneyInstance, money),
    new TypeError("Currencies must be identical")
  );
}

function equals(moneyInstance: Instance, money: MoneyBase) {
  return (
    moneyInstance.publicInstance.isSameCurrency(money) &&
    moneyInstance.privateInstance.instanceMoney.amount === money.getAmount()
  );
}

function compare(instance: Instance, money: MoneyBase) {
  const { publicInstance, privateInstance } = instance;

  assertSameCurrency(publicInstance, money);

  return privateInstance.calculator.compare(
    privateInstance.instanceMoney.amount,
    money.getAmount()
  );
}

function greaterThan(publicInstance: MoneyBase, money: MoneyBase) {
  return publicInstance.compare(money) > 0;
}

function greaterThanOrEqual(publicInstance: MoneyBase, money: MoneyBase) {
  return publicInstance.compare(money) >= 0;
}

function lessThan(publicInstance: MoneyBase, money: MoneyBase) {
  return publicInstance.compare(money) < 0;
}

function lessThanOrEqual(publicInstance: MoneyBase, money: MoneyBase) {
  return publicInstance.compare(money) <= 0;
}

function multiply(
  instance: Instance,
  multiplier: string | number,
  roundingMode: RoundingModesType = RoundingModes.HALF_EVEN
) {
  assertOperand(multiplier);
  assertRoundingMode(roundingMode);

  const { publicInstance, privateInstance } = instance;

  const { calculator } = privateInstance;

  const newAmount = calculator.multiply(publicInstance.getAmount(), multiplier);

  const roundedAmount = privateInstance.round(newAmount, roundingMode);

  return createMoneyFactory(privateInstance.calculator, {
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

// TODO: ramke to assertions
function divide(
  instance: Instance,
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

  return createMoneyFactory(calculator, {
    amount: quotient,
    currency: publicInstance.getCurrency()
  });
}

// TODO: ramke to assertions

function allocate(instance: Instance, ratios: number[]) {
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
      createMoneyFactory(calculator, {
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
    createMoneyFactory(calculator, {
      amount: result,
      currency: publicInstance.getCurrency()
    })
  );
}

function allocateTo(instance: Instance, n: number) {
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

function mod(instance: Instance, divisor: MoneyBase) {
  assertSameCurrency(instance.publicInstance, divisor);

  const { publicInstance, privateInstance } = instance;

  const { calculator } = privateInstance;

  const newAmount = calculator.mod(
    publicInstance.getAmount(),
    divisor.getAmount()
  );

  return createMoneyFactory(privateInstance.calculator, {
    amount: newAmount,
    currency: publicInstance.getCurrency()
  });
}

function absolute(instance: Instance) {
  const { privateInstance, publicInstance } = instance;
  return createMoneyFactory(privateInstance.calculator, {
    amount: privateInstance.calculator.absolute(publicInstance.getAmount()),
    currency: publicInstance.getCurrency()
  });
}

function negative(instance: Instance) {
  const { privateInstance, publicInstance } = instance;
  const { calculator } = privateInstance;

  const newAmount = calculator.subtract("0", publicInstance.getAmount());
  return createMoneyFactory(calculator, {
    amount: newAmount,
    currency: publicInstance.getCurrency()
  });
}

function isZero(instance: Instance) {
  const { privateInstance, publicInstance } = instance;
  const { calculator } = privateInstance;

  return calculator.compare(publicInstance.getAmount(), "0") === 0;
}

function isPositive(instance: Instance) {
  const { privateInstance, publicInstance } = instance;
  const { calculator } = privateInstance;

  return calculator.compare(publicInstance.getAmount(), "0") > 0;
}

function isNegative(instance: Instance) {
  const { privateInstance, publicInstance } = instance;
  const { calculator } = privateInstance;

  return calculator.compare(publicInstance.getAmount(), "0") < 0;
}

function ratioOf(instance: Instance, money: MoneyBase) {
  if (money.isZero()) {
    throw new TypeError("Cannot calculate a ratio of zero");
  }

  const { privateInstance, publicInstance } = instance;
  const { calculator } = privateInstance;

  return calculator.divide(publicInstance.getAmount(), money.getAmount());
}
