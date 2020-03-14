# easy-money

WIP, (03.14.2020) we are still work in progress.

High-level roadmap

| Feature                           | Status |
| --------------------------------- | ------ |
| core functions in math            | ✅      |
| custom calculators support        | ✅      |
| tests on most codebase            | ✅      |
| currencies                        | ✅      |
| bigInt Support                    | ✅      |
| formatting                        | ❌(30%) |
| docs and community                | ❌(10%) |
| currencies stable api with crypto | ❌      |

Feel free to ask any questions or just contact, I open to any suggestions or ideas

[Facebook](https://www.facebook.com/andrey.frolov.94617)

[Telegram](https://t.me/frolovandrei)

Money library for working with monetary values in js

## Main features

- 🎁 **composable and modular api**: easy tree shaking with webpack
- 🛠 **statically typed**: first-class support of typescript
- 💣 **reliable**: great dx and human readable errors
- 🎁 **immutable**: immutable data
- 💡 **big int suport**: support new standart of big int out of the box
- 🧮 **custom calculators**: support custom calculators (for example if u need operating with big values like string) 

## Comparison with other money libraries

|                    | easy-money | Dinero |
| ------------------ | ---------- | ------ |
| Custom calculators | ✅          | ❌      |
| Big int support    | ✅          | ❌      |
| Tree Shaking       | ✅          | ❌      |
| Typescript         | ✅          | ❌      |
| Flexible api       | ✅          | ❌      |

## Installation

```sh
npm i easy-money
```

or

```sh
yarn add easy-money
```

## Usage


### Money
```js

```
```js

```

### Pass custom calculator 

In example we just pass base calculator



### Formatting

### Working with currencies


## IEEE 754 starndart

WIKI


Roundings to nearest
- **Round to nearest, ties to even** – rounds to the nearest value; if the number falls midway, it is rounded to the nearest value with an even least significant digit; this is the default for binary floating point and the recommended default for decimal.
- **Round to nearest, ties away from zero** – rounds to the nearest value; if the number falls midway, it is rounded to the nearest value above (for positive numbers) or below (for negative numbers); this is intended as an option for decimal floating point.

Directed roundings
Round toward 0 – directed rounding towards zero (also known as truncation).
Round toward +∞ – directed rounding towards positive infinity (also known as rounding up or ceiling).
Round toward −∞ – directed rounding towards negative infinity (also known as rounding down or floor).

| Mode / Example Value            | +11.5 | +12.5 | −11.5 | −12.5 |
| ------------------------------- | ----- | ----- | ----- | ----- |
| to nearest, ties to even        | +12.0 | +12.0 | −12.0 | −12.0 |
| to nearest, ties away from zero | +12.0 | +13.0 | -12.0 | -13.0 |
| toward 0                        | +11.0 | +12.0 | -11.0 | -12.0 |
| toward +∞                       | +12.0 | +13.0 | −11.0 | -12.0 |
| toward −∞                       | +11.0 | +12.0 | −12.0 | −13.0 |


## EASY-MONEY


**HALF_EVEN**
aka (Banker's Rounding)

| +5.0 | +5.1 | +5.4 | +5.5    | +5.6 | +5.9 | +6.0   | +6.1 | +6.4 | +6.5    | +6.6 | +6.9 | +7.0 |
| ---- | ---- | ---- | ------- | ---- | ---- | ------ | ---- | ---- | ------- | ---- | ---- | ---- |
| +5   | +5   | +5   | +6      | +6   | +6   | **6**  | +6   | +6   | +6      | +7   | +7   | +7   |
|      |      |      | **-->** |      |      | center |      |      | **<--** |      |      |      |


| -7.0 | -6.9 | -6.6 | -6.5    | -6.4 | -6.1 | -6.0   | -5.9 | -5.6 | -5.5    | -5.4 | -5.1 | -5.0 |
| ---- | ---- | ---- | ------- | ---- | ---- | ------ | ---- | ---- | ------- | ---- | ---- | ---- |
| -7   | -7   | -7   | -6      | -6   | -6   | **-6** | -6   | -6   | -6      | -5   | -5   | -5   |
|      |      |      | **-->** |      |      | center |      |      | **<--** |      |      |      |


**HALF_UP**
aka arithmetic rounding | half up with symmetric implementation (like in Java, PHP or Python)

| +5.0 | +5.1 | +5.4 | +5.5   | +5.6 | +5.9 | +6.0 |
| ---- | ---- | ---- | ------ | ---- | ---- | ---- |
| +5   | +5   | +5   | +6     | +6   | +6   | 6    |
| <—   | <—   | <—   | **—>** | —>   | —>   | <—   |

| -7.0 | -6.9 | -6.6 | -6.5   | -6.4 | -6.1 | -6.0   | -5.9 | -5.6 | -5.5   | -5.4 | -5.1 | -5.0 |
| ---- | ---- | ---- | ------ | ---- | ---- | ------ | ---- | ---- | ------ | ---- | ---- | ---- |
| -7   | -7   | -7   | -7     | -6   | -6   | **-6** | -6   | -6   | -6     | -5   | -5   | -5   |
|      |      |      | **<—** |      |      |        |      |      | **<—** |      |      |      |


**HALF_DOWN**
aka arithmetic rounding | half down with symmetric implementation 

| +5.0 | +5.1 | +5.4 | +5.5   | +5.6 | +5.9 | +6.0 |
| ---- | ---- | ---- | ------ | ---- | ---- | ---- |
| +5   | +5   | +5   | +5     | +6   | +6   | 6    |
| <—   | <—   | <—   | **<—** | —>   | —>   | <—   |

| -7.0 | -6.9 | -6.6 | -6.5    | -6.4 | -6.1 | -6.0   | -5.9 | -5.6 | -5.5   | -5.4 | -5.1 | -5.0 |
| ---- | ---- | ---- | ------- | ---- | ---- | ------ | ---- | ---- | ------ | ---- | ---- | ---- |
| -7   | -7   | -7   | -6      | -6   | -6   | **-6** | -6   | -6   | -5     | -5   | -5   | -5   |
|      |      |      | **-->** |      |      |        |      |      | **—>** |      |      |      |


**FLOOR**
TOWARD negative infinity

| +5.0 | +5.1 | +5.4 | +5.5   | +5.6 | +5.9 | +6.0 |
| ---- | ---- | ---- | ------ | ---- | ---- | ---- |
| +5   | +5   | +5   | +5     | +5   | +5   | 6    |
| <—   | <—   | <—   | **<—** | <—   | <—   | <—   |


| -6.0 | -5.9 | -5.6 | -5.5   | -5.4 | -5.2 | -5.0 |
| ---- | ---- | ---- | ------ | ---- | ---- | ---- |
| -6   | -6   | -6   | -6     | -6   | -6   | -5   |
| —>   | <—   | <—   | **<—** | <—   | <—   | —>   |

**CEILING**
toward positive infinity

| +5.0 | +5.1 | +5.4 | +5.5   | +5.6 | +5.9 | +6.0 |
| ---- | ---- | ---- | ------ | ---- | ---- | ---- |
| +5   | +6   | +6   | +6     | +6   | +6   | 6    |
| <—   | —>   | —>   | **—>** | —>   | —>   | <—   |


| -6.0 | -5.9 | -5.6 | -5.5   | -5.4 | -5.2 | -5.0 |
| ---- | ---- | ---- | ------ | ---- | ---- | ---- |
| -6   | -5   | -5   | -5     | -5   | -5   | -5   |
| —>   | —>   | —>   | **—>** | —>   | —>   | —>   |


**TOWARD_ZERO**

| +5.0 | +5.1 | +5.4 | +5.5   | +5.6 | +5.9 | +6.0 |
| ---- | ---- | ---- | ------ | ---- | ---- | ---- |
| +5   | +5   | +5   | +5     | +5   | +5   | +6   |
| <—   | <—   | <—   | **<—** | <—   | <—   | <—   |


| -6.0 | -5.9 | -5.6 | -5.5   | -5.4 | -5.2 | -5.0 |
| ---- | ---- | ---- | ------ | ---- | ---- | ---- |
| -6   | -5   | -5   | -5     | -5   | -5   | -5   |
| —>   | —>   | —>   | **—>** | —>   | —>   | —>   |



**AWAY_FROM_ZERO**

| +5.0 | +5.1 | +5.4 | +5.5   | +5.6 | +5.9 | +6.0 |
| ---- | ---- | ---- | ------ | ---- | ---- | ---- |
| +5   | +6   | +6   | +6     | +6   | +6   | +6   |
| <—   | —>   | —>   | **—>** | —>   | —>   | <—   |


| -6.0 | -5.9 | -5.6 | -5.5   | -5.4 | -5.2 | -5.0 |
| ---- | ---- | ---- | ------ | ---- | ---- | ---- |
| -6   | -6   | -6   | -6     | -6   | -6   | -5   |
| —>   | <—   | <—   | **<—** | <—   | <—   | —>   |

**SUMMARY TABLE**

| EASY-MONEY | HALF_EVEN    | HALF_UP | HALF_DOWN | FLOOR           | CEILING         | TOWARDS_ZERO   | AWAY_FROM_ZERO                        |
| ---------- | ------------ | ------- | --------- | --------------- | --------------- | -------------- | ------------------------------------- |
| JAVA       | HALF_EVEN    | HALF_UP | HALF_DOWN | FLOOR           | CEILING         | DOWN           | UP                                    |
| PHP        |              |         |           |                 |                 |                |                                       |
| IEEE 754   | Ties to even | —       | —         | Round toward -∞ | Round toward +∞ | Round toward 0 | Round to nearest, ties away from zero |
| 5.5        | 6            | 6       | 5         | 5               | 6               | 5              | 6                                     |
| 2.5        | 2            | 3       | 2         | 2               | 3               | 2              | 3                                     |
| 1.6        | 2            | 2       | 2         | 1               | 2               | 1              | 2                                     |
| 1.1        | 1            | 1       | 1         | 1               | 2               | 1              | 2                                     |
| 1.0        | 1            | 1       | 1         | 1               | 1               | 1              | 1                                     |
| -1.0       | -1           | -1      | -1        | -1              | -1              | -1             | -1                                    |
| -1.1       | -1           | -1      | -1        | -2              | -1              | -1             | -2                                    |
| -1.6       | -2           | -2      | -2        | -2              | -1              | -1             | -2                                    |
| -2.5       | -3           | -3      | -2        | -3              | -2              | -2             | -3                                    |
| -5.5       | -6           | -6      | -5        | -6              | -5              | -5             | -6                                    |

