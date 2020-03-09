// import { bind } from "./../bind";
// import { IMoney } from "./../types";
// import { Formatter } from "./types";

// function createIntlFormatter(moneyInstance: IMoney): Formatter {
//   const publicInstance = {} as Formatter;

//   publicInstance.format = bind(format, moneyInstance);

//   return publicInstance;
// }

// // locales?: string | string[] | undefined, options?: Intl.NumberFormatOptions | undefined) => Intl.NumberFormat
// function format(
//   moneyInstance: IMoney,
//   locales?: string | string[],
//   options?: Exclude<Intl.NumberFormatOptions, "currency"> | undefined
// ) {
//   const formatter = new Intl.NumberFormat(locales, {
//     ...options,
//     currency: moneyInstance.getCurrency()
//   });

//   const amount = moneyInstance.getAmount();

//   // @ts-ignore
//   return formatter.format(amount);
// }
