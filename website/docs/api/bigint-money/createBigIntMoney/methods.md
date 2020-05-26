---
id: methods
title: Methods
hide_title: true
sidebar_label: methods
---

## `add(money)`

#### Description

Additions can be performed using add().

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`money` ([BigIntMoneyBase](Description.md#bigintmoneybase))


**Example**

```js

import { createBigIntMoney } from "@easymoney/bigint-money";

const money = createBigIntMoney({ amount: 100n, currency: "USD" });

const money2 = createBigIntMoney({ amount: 100n, currency: "USD" });

const result = money.add(money2);

result.getAmount();
// => 200n

```

## `allocate(ratios)`

#### Description

Allocate by Ratios

My company made a whopping profit of 5 cents, which has to be divided amongst myself (70%) and my investor (30%). Cents can’t be divided, so I can’t give 3.5 and 1.5 cents. If I round up, I get 4 cents, the investor gets 2, which means I need to conjure up an additional cent. Rounding down to 3 and 1 cent leaves me 1 cent. Apart from re-investing that cent in the company, the best solution is to keep handing out the remainder until all money is spent.

#### Arguments

1. `ratios (Array<number>)`

#### Returns

`Array` <([BigIntMoneyBase](Description.md#bigintmoneybase))>


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money = createBigIntMoney({ amount: 100n, currency: 'RUB' });
const money1 = createBigIntMoney({ amount: 101n, currency: 'USD' });

const allocated = money.allocate([1, 1, 1]);
const allocated1 = money1.allocate([1, 1, 1]);

allocated.map((result) => result.getAmount());
// => 34n, 33n, 33n

allocated1.map((result) => result.getAmount());
// => 34n, 34n, 33n

//if allocate for negative values
const moneyNegative = createBigIntMoney({ amount: -5n, currency: 'RUB' });

const allocatedNegative = moneyNegative.allocate([7, 3]);

allocatedNegative.map((result) => result.getAmount());
// => -3n, -2n

```

## `allocateTo(number)`

#### Description

Allocate to N targets
An amount of money can be allocated to N targets using allocateTo().

#### Arguments

1. `number (number)`

#### Returns

`Array` <([BigIntMoneyBase](Description.md#bigintmoneybase))>


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money = createBigIntMoney({ amount: 15n, currency: 'RUB' });
const money1 = createBigIntMoney({ amount: 10n, currency: 'USD' });

money.allocateTo(2).map((result) => result.getAmount());
//  => 8n, 7n

money1.allocateTo(3).map((result) => result.getAmount());
// => 4n, 3n, 3n

```


## compare(money)

#### Description

Compares two Money objects.

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`1 | 0 | -1`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.compare(money2);
// => 0


```

## `divide(money,roundingMode?)`

#### Description

Divisions can be performed using divide().

#### Arguments

1. `money` (number | string | bigint)
2. `roundingMode?` ([RoundingModesType](Description.md#roundingmodestype))

#### Returns

`money` ([BigIntMoneyBase](Description.md#bigintmoneybase))


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

const result = money1.divide(5);

const result2 = money1.divide(1 / 2);

result.getAmount();
// ->20n

result2.getAmount();
// ->200n

```

## `equals(money)`

#### Description

Compares whether two Money objects are equal in value and currency.

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`boolean`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

//if money objects are equal
const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.equals(money2);
// => true

//if money objects arent equal with amount or currency
const money3 = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money4 = createBigIntMoney({ amount: 100n, currency: 'RUB' });

money3.equals(money4);
// => false

```


## `getAmount()`

#### Description

Returns amount of Money object.

#### Returns

`money` ([Money](Description.md#money))


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const result1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

result1.getAmount();
// => 100n

```


## `getCurrency()`

#### Description

Returns currency of Money object.

#### Returns

`money` ([Money](Description.md#money))


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const result1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

result1.getCurrency();
// => "USD"

```

## `getSource()`

#### Returns

`number`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const result1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

result1.getSource();
// => 100n

```

## `greaterThan(money)`

#### Description

Compares whether the first Money object is larger than the second.

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`boolean`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

//if first value equals second
const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.greaterThan(money2);
// => false

//if first value greater then second
const money3 = createBigIntMoney({ amount: 150n, currency: 'USD' });

const money4 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money3.greaterThan(money4);
// => true

```

## `greaterThanOrEqual(money)`

#### Description

You can also use greaterThanOrEqual() to additionally check for equality.

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`boolean`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

//if first value equals second
const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.greaterThanOrEqual(money2);
// => true

//if first value greater than second
const money3 = createBigIntMoney({ amount: 150n, currency: 'USD' });

const money4 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money3.greaterThanOrEqual(money4);
// => true

```

## `isSameCurrency(money)`

#### Description

Compares whether two Money objects have the same currency.

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`boolean`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

//if currencies are same
const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 200n, currency: 'USD' });

money.isSameCurrency(money2);
// => true

//if currencies arent same
const money3 = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money4 = createBigIntMoney({ amount: 200n, currency: 'RUB' });

money3.isSameCurrency(money4);
// => false

```

## `lessThan(money)`

#### Description

Compares whether the first Money object is less than the second.

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`boolean`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

//if first value equals second
const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.lessThan(money2);
// => false

//if first value less than second
const money3 = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money4 = createBigIntMoney({ amount: 150n, currency: 'USD' });

money3.lessThan(money4);
// => true

```

## `lessThanOrEqual(money)`

#### Description

You can also use lessThanOrEqual() to additionally check for equality.

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`boolean`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

//if first value equals second
const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.lessThanOrEqual(money2);
// => true

//if first value less then second
const money3 = createBigIntMoney({ amount: 150n, currency: 'USD' });

const money4 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money3.lessThanOrEqual(money4);
// => true

```

## `multiply(money,roundingMode?)`

#### Description

Multiplications can be performed using multiply().

#### Arguments

1. `money` (number | string | bigint)
2. `roundingMode?` ([RoundingModesType](Description.md#roundingmodestype))

#### Returns

`money` ([BigIntMoneyBase](Description.md#bigintmoneybase))


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

const result = money1.multiply(6);

result.getAmount();
// => 600n

```

## `subtract(money)`

#### Description

Subtractions can be performed using subtract().

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`money` ([BigIntMoneyBase](Description.md#bigintmoneybase))


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 101n, currency: 'USD' });

const result = money.subtract(money2);

result.getAmount();
// => -1n

```