---
id: methods
title: Methods
hide_title: true
sidebar_label: methods
---


## `absolute()`

#### Description

Provides the absolute value of a Money object.

#### Returns

1. `money` ([MoneyBase](Description.md#moneybase))


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: -100, currency: 'USD' });

const result = money.absolute();
// => "100"

```


## `add(money)`

#### Description

Additions can be performed using add().

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`money` ([MoneyBase](Description.md#moneybase))

#### Throws

`TypeError` - throws if currencies aren't identical

`TypeError` - throws if result of arithmetic operation isn't an integer

#### Example

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

const result = money.add(money2);

result.getAmount();
// => 200

```


## `allocate(ratios)`

#### Description

Allocate by Ratios

My company made a whopping profit of 5 cents, which has to be divided amongst myself (70%) and my investor (30%). Cents can’t be divided, so I can’t give 3.5 and 1.5 cents. If I round up, I get 4 cents, the investor gets 2, which means I need to conjure up an additional cent. Rounding down to 3 and 1 cent leaves me 1 cent. Apart from re-investing that cent in the company, the best solution is to keep handing out the remainder until all money is spent.

#### Arguments

1. `ratios (Array<number>)`

#### Returns

`Array` <([MoneyBase](Description.md#moneybase))>


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'RUB' });
const money1 = createMoney({ amount: 101, currency: 'USD' });
const money2 = createMoney({ amount: 1, currency: 'USD' });

const allocated = money.allocate([1, 1, 1]);
const allocated1 = money1.allocate([1, 1, 1]);
const allocated2 = money2.allocate([0.33, 0.66]);

allocated.map((result) => result.getAmount());
// => "34", "33", "33"

allocated1.map((result) => result.getAmount());
// => "34", "34", "33"

allocated2.map((result) => result.getAmount());
// => "0", "1"

//if allocate for negative values
const moneyNegative = createMoney({ amount: -5, currency: 'RUB' });

const allocatedNegative = moneyNegative.allocate([3, 7]);

allocatedNegative.map((result) => result.getAmount());
// => "-2", "-3"

```


## `allocateTo(money)`

#### Description

Allocate to N targets
An amount of money can be allocated to N targets using allocateTo().

#### Arguments

1. `money`

#### Returns

`Array` <([MoneyBase](Description.md#moneybase))>


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 15, currency: 'RUB' });
const money1 = createMoney({ amount: 10, currency: 'USD' });

money.allocateTo(2).map((result) => result.getAmount());
//  => "8", "7"

money1.allocateTo(3).map((result) => result.getAmount());
// => "4", "3", "3"

```

## compare(money)

#### Description

Compares two Money objects.

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`1 | 0 | -1`


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

money.compare(money2);
// => 0

```


## `divide(money,roundingMode?)`

#### Description

Divisions can be performed using divide().

#### Arguments

1. `money` (number | string)
2. `roundingMode?` ([RoundingModesType](Description.md#roundingmodestype))

#### Returns

`money` ([MoneyBase](Description.md#moneybase))


**Example**

```js

import { createMoney } from '@easymoney/money';

const money1 = createMoney({ amount: 100, currency: 'USD' });

const result = money1.divide(5);

const result2 = money1.divide(1 / 2);

result.getAmount();
// => "20"

result2.getAmount();
// => "200"

```


## `equals(money)`

#### Description

Compares whether two Money objects are equal in value and currency.

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if money objects are equal
const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

money.equals(money2);
// => true

//if money objects arent equal with amount or currency
const money3 = createMoney({ amount: 100, currency: 'USD' });

const money4 = createMoney({ amount: 100, currency: 'RUB' });

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

import { createMoney } from '@easymoney/money';

const result1 = createMoney({ amount: 100, currency: 'USD' });

result1.getAmount();
// => "100"

```


## `getCurrency()`

#### Description

Returns currency of Money object.

#### Returns

`money` ([MoneyBase](Description.md#money))


**Example**

```js

import { createMoney } from '@easymoney/money';

const result1 = createMoney({ amount: 100, currency: 'USD' });

result1.getCurrency();
// -> "USD"

```

## `greaterThan(money)`

#### Description

Compares whether the first Money object is larger than the second.

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if first value equals second
const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

money.greaterThan(money2);
// => false

//if first value greater then second
const money3 = createMoney({ amount: 150, currency: 'USD' });

const money4 = createMoney({ amount: 100, currency: 'USD' });

money3.greaterThan(money4);
// => true

```

## `greaterThanOrEqual(money)`

#### Description

You can also use greaterThanOrEqual() to additionally check for equality.

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if first value equals second
const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

money.greaterThanOrEqual(money2);
// => true

//if first value greater then second
const money3 = createMoney({ amount: 150, currency: 'USD' });

const money4 = createMoney({ amount: 100, currency: 'USD' });

money3.greaterThanOrEqual(money4);
// => true

```


## `isNegative()`

#### Description

Returns true if amount is negative.

#### Returns

`boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if amount value is zero
const money = createMoney({ amount: 100, currency: 'USD' });

money.isNegative();
// => false

//if amount value isnt zero
const money1 = createMoney({ amount: -100, currency: 'USD' });

money1.isNegative();
// => true

```

## `isPositive()`

#### Description

Returns true if amount is positive.

#### Returns

`boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if amount value is zero
const money = createMoney({ amount: 100, currency: 'USD' });

money.isPositive();
// => true

//if amount value isnt zero
const money1 = createMoney({ amount: -100, currency: 'USD' });

money1.isPositive();
// => false

```

## `isSameCurrency(money)`

#### Description

Compares whether two Money objects have the same currency.

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if currencies are same
const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 200, currency: 'USD' });

money.isSameCurrency(money2);
// => true

//if currencies arent same
const money3 = createMoney({ amount: 100, currency: 'USD' });

const money4 = createMoney({ amount: 200, currency: 'RUB' });

money3.isSameCurrency(money4);
// => false

```

## `isZero()`

#### Description

Returns true if amount is equals zero.

#### Returns

`boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if amount value is zero
const money = createMoney({ amount: 0, currency: 'USD' });

money.isZero();
// => true

//if amount value isnt zero
const money1 = createMoney({ amount: 100, currency: 'USD' });

money1.isZero();
// => false

```


## `lessThan(money)`

#### Description

Compares whether the first Money object is less than the second.

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if first value equals second
const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

money.lessThan(money2);
// => false

//if first value less then second
const money3 = createMoney({ amount: 100, currency: 'USD' });

const money4 = createMoney({ amount: 150, currency: 'USD' });

money3.lessThan(money4);
// => true

```


## `lessThanOrEqual(money)`

#### Description

You can also use lessThanOrEqual() to additionally check for equality.

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if first value equals second
const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

money.lessThanOrEqual(money2);
// => true

//if first value less then second
const money3 = createMoney({ amount: 100, currency: 'USD' });

const money4 = createMoney({ amount: 150, currency: 'USD' });

money3.lessThanOrEqual(money4);
// => true

```



## `mod(money)`

#### Description

Modulus operations can be performed using mod().


#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`money` ([MoneyBase](Description.md#moneybase))


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 200, currency: 'USD' });

const money3 = createMoney({ amount: 100, currency: 'USD' });

const result = money.mod(money2);

const result1 = money.mod(money2).mod(money3);

result.getAmount();
// => "100"

result1.getAmount();
// => "0"

```

## `multiply(money,roundingMode?)`

#### Description

Multiplications can be performed using multiply().

#### Arguments

1. `money` (number | string)
2. `roundingMode?` ([RoundingModesType](Description.md#roundingmodestype))

#### Returns

`money` ([BigIntMoneyBase](Description.md#moneybase))


**Example**

```js

import { createMoney } from '@easymoney/money';

const money1 = createMoney({ amount: 100, currentcy: 'USD' });

const result = money1.multiply(6);

result.getAmount();
// => "600"

```


## `negative()`

#### Returns

`money` ([MoneyBase](Description.md#moneybase))


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'USD' });

const result = money.negative();
// => "-100"

```

## `ratioOf(money)`

#### Description

ratioOf() provides the ratio of a Money object in comparison to another Money object.

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`string`


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'RUB' });

const money1 = createMoney({ amount: 20, currency: 'RUB' });

const result = money.ratioOf(money1);
// => "5"

```

## `subtract(money)`

#### Description

Subtractions can be performed using subtract().

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`money` ([MoneyBase](Description.md#moneybase))


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 101, currency: 'USD' });

const result = money.subtract(money2);

result.getAmount();
// => "-1"

```