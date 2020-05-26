---
id: methods
title: Methods
hide_title: true
sidebar_label: methods
---

## absolute

#### Description

Provides the absolute value of a Money object.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "-222333444111155666677788899", currency: 'USD' });

const money1 = createBigNumberMoney({ amount: -100, currency: 'USD' });

const result = money.absolute();
// => "222333444111155666677788899"

const result1 = money1.absolute();
// => "100"

```

## `add(money)`

#### Description

Additions can be performed using add().

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`money` ([MoneyBase](Description.md#moneybase))

#### Example

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "111222333344445566677889999", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: 100, currency: 'USD' });

const result = money.add(money2);

result.getAmount();
// => "111122223333444455556666777788890099"


```

## allocate

#### Description

Allocate by Ratios

My company made a whopping profit of 5 cents, which has to be divided amongst myself (70%) and my investor (30%). Cents can’t be divided, so I can’t give 3.5 and 1.5 cents. If I round up, I get 4 cents, the investor gets 2, which means I need to conjure up an additional cent. Rounding down to 3 and 1 cent leaves me 1 cent. Apart from re-investing that cent in the company, the best solution is to keep handing out the remainder until all money is spent.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: 150, currency: 'RUB' });
const money1 = createBigNumberMoney({ amount: "123456789123456789123456788", currency: 'USD' });
const money2 = createBigNumberMoney({ amount: 1, currency: 'USD' });

const allocated = money.allocate([3, 4, 3]);
const allocated1 = money1.allocate([1, 1, 1]);
const allocated2 = money2.allocate([0.33, 0.66]);

allocated.map((result) => result.getAmount());
// => "45", "60", "45"

allocated1.map((result) => result.getAmount());
// => "41152263041152263041152264", "41152263041152263041152262","41152263041152263041152262"    

allocated2.map((result) => result.getAmount());
// => "0", "1"

//if allocate for negative values
const moneyNegative = createBigNumberMoney({ amount: "-8831487109640372124", currency: 'RUB' });

const allocatedNegative = moneyNegative.allocate([2, 7]);

allocatedNegative.map((result) => result.getAmount());
// => "-1962552691031193805", "-6868934418609178319"

```

## allocateTo

#### Description

Allocate to N targets
An amount of money can be allocated to N targets using allocateTo().

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';;

const money = createBigNumberMoney({ amount: "12345678912345678901234567890", currency: 'RUB' });
const money1 = createBigNumberMoney({ amount: "999888777666555444333222111005", currency: 'USD' });

money.allocateTo(2).map((result) => result.getAmount());
//  => "6172839456172839450617283945","6172839456172839450617283945"    

money1.allocateTo(3).map((result) => result.getAmount());
// => "3332962592221851481110740370003",
//    "3332962592221851481110740370001",  
//    "3332962592221851481110740370001"    

```

## compare

#### Description

Compares two Money objects.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "1119992228883337774444666555", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "1119992228883337774444666555", currency: 'USD' });

money.compare(money2);
// => 0

```

## divide

#### Description

Divisions can be performed using divide().

**Example**

```js

import { createBigNumberMoney } from '@easymoney/money';

const money1 = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

const result = money1.divide(5);

const result2 = money1.divide(1 / 2);

result.getAmount();
// => "19823764554673289118256798224"

result2.getAmount();
// => "198237645546732891182567982244"

```

## equals

#### Description

Compares whether two Money objects are equal in value and currency.


**Example**

```js

import { createBigNumberMoney } from '@easymoney/money';

//if money objects are equal
const money = createBigNumberMoney({ amount: "11112222333344445556667778888", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "11112222333344445556667778888", currency: 'USD' });

money.equals(money2);
// => true

//if money objects arent equal with amount or currency
const money3 = createBigNumberMoney({ amount: "11112222333344445556667778888", currency: 'USD' });

const money4 = createBigNumberMoney({ amount: "11112222333344445556667778888", currency: 'RUB' });

money3.equals(money4);
// => false

```


## getAmount

#### Description

Returns amount of Money object.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const result1 = createBigNumberMoney({ amount: "1982376455467328918256798244", currency: 'USD' });

result1.getAmount();
// => "1982376455467328918256798244"

```

## getCurrency

#### Description

Returns currency of Money object.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const result1 = createBigNumberMoney({ amount: "1982376455467328918256798244", currency: 'USD' });

result1.getCurrency();
// -> "USD"

```


## greaterThan

#### Description

Compares whether the first Money object is larger than the second.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if first value equals second
const money = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

money.greaterThan(money2);
// => false

//if first value greater then second
const money3 = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

const money4 = createBigNumberMoney({ amount: "100100100100100100100100", currency: 'USD' });

money3.greaterThan(money4);
// => true

```

## greaterThanOrEqual

#### Description

You can also use greaterThanOrEqual() to additionally check for equality.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if first value equals second
const money = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

money.greaterThanOrEqual(money2);
// => true

//if first value greater then second
const money3 = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

const money4 = createBigNumberMoney({ amount: "100100100100100100100100", currency: 'USD' });

money3.greaterThanOrEqual(money4);
// => true

```

## isNegative

#### Description

Returns true if amount is negative.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if amount value is positive
const money = createBigNumberMoney({ amount: "999888777666555444333222111", currency: 'USD' });

money.isNegative();
// => false

//if amount value is negative
const money1 = createBigNumberMoney({ amount: "-999888777666555444333222111", currency: 'USD' });

money1.isNegative();
// => true

```


## isPositive

#### Description

Returns true if amount is positive.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if amount value is positive
const money = createBigNumberMoney({ amount: "999888777666555444333222111", currency: 'USD' });

money.isPositive();
// => true

//if amount value isnt positive
const money1 = createBigNumberMoney({ amount: "-999888777666555444333222111", currency: 'USD' });

money1.isPositive();
// => false

```


## isSameCurrency

#### Description

Compares whether two Money objects have the same currency.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if currencies are same
const money = createBigNumberMoney({ amount: "1111222233334444555566667777", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: 200, currency: 'USD' });

money.isSameCurrency(money2);
// => true

//if currencies arent same
const money3 = createBigNumberMoney({ amount: "1111222233334444555566667777", currency: 'USD' });

const money4 = createBigNumberMoney({ amount: 200, currency: 'RUB' });

money3.isSameCurrency(money4);
// => false

```

## isZero

#### Description

Returns true if amount is equals zero.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if amount value is zero
const money = createBigNumberMoney({ amount: "0", currency: 'USD' });

money.isZero();
// => true

//if amount value isnt zero
const money1 = createBigNumberMoney({ amount: "1111222233334444555566667777", currency: 'USD' });

money1.isZero();
// => false

```

## lessThan

#### Description

Compares whether the first Money object is less than the second.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if first value equals second
const money = createBigNumberMoney({ amount: "111999222888333777444666555", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "111999222888333777444666555", currency: 'USD' });

money.lessThan(money2);
// => false

//if first value less then second
const money3 = createBigNumberMoney({ amount: "111999222888333777444666555", currency: 'USD' });

const money4 = createBigNumberMoney({ amount: "99999111999222888333444666555", currency: 'USD' });

money3.lessThan(money4);
// => true

```

## lessThanOrEqual

#### Description

You can also use lessThanOrEqual() to additionally check for equality.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if first value equals second
const money = createBigNumberMoney({ amount: "111999222888333777444666555", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "111999222888333777444666555", currency: 'USD' });

money.lessThanOrEqual(money2);
// => true

//if first value less then second
const money3 = createBigNumberMoney({ amount: "111999222888333777444666555", currency: 'USD' });

const money4 = createBigNumberMoney({ amount: "9999991119992228883377446655", currency: 'USD' });

money3.lessThanOrEqual(money4);
// => true

```

## mod

#### Description

Modulus operations can be performed using mod().

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "111222333444555666777888999", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "222299991111133334444", currency: 'USD' });

const money3 = createBigNumberMoney({ amount: "90391877881222194699", currency: 'USD' });

const result = money.mod(money2);

const result1 = money.mod(money2).mod(money3);

result.getAmount();
// => "90391877881222194699"

result1.getAmount();
// => "0"

```

## multiply

#### Description

Multiplications can be performed using multiply().

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money1 = createBigNumberMoney({ amount: "77778888111133339999111", currency: 'USD' });

const result = money1.multiply(6);

result.getAmount();
// => "466673328666800039994666"

```


## negative

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "999888777666555444333222111", currency: 'USD' });

const result = money.negative();
// => "-999888777666555444333222111"

```

## ratioOf

#### Description

ratioOf() provides the ratio of a Money object in comparison to another Money object.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "10000000000000000000000000000", currency: 'RUB' });

const money1 = createBigNumberMoney({ amount: "200000000000000", currency: 'RUB' });

const result = money.ratioOf(money1);
// => "50000000000000"

```


## subtract

#### Description

Subtractions can be performed using subtract().

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "222888833337777444466665555", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "222888833337777444466665556", currency: 'USD' });

const result = money.subtract(money2);

result.getAmount();
// => "-1"

```
