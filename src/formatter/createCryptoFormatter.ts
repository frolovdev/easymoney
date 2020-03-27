// A map of supported currency codes to currency symbols.
const supportedCurrencySymbols = {
  BTC: "₿",
  ETH: "Ξ"
} as const;

const symbolOverrides: {
  [ticker: string]: {
    location: { start: boolean; end?: boolean };
    forLocales: { [locale: string]: boolean };
  };
} = {
  MYR: { location: { start: true }, forLocales: { en: true } },
  SGD: { location: { start: true }, forLocales: { en: true } },
  PHP: { location: { start: true }, forLocales: { en: true } },
  BTC: { location: { start: true }, forLocales: { en: true } },
  ETH: { location: { start: true }, forLocales: { en: true } }
};

// Function to transform the output from Intl.NumberFormat#format
function formatCurrencyOverride(formattedCurrency, locale = "en") {
  // If currency code is at the back
  const currencyCodeBackMatch = formattedCurrency.match(/[A-Z]{3}$/);
  if (currencyCodeBackMatch != null) {
    const code = currencyCodeBackMatch[0];

    // Replace currency code with symbol if whitelisted.
    const overrideObj = symbolOverrides[code];
    if (
      overrideObj &&
      overrideObj.location.end &&
      overrideObj.forLocales[locale]
    ) {
      return formattedCurrency.replace(code, supportedCurrencySymbols[code]);
    } else {
      return formattedCurrency;
    }
  }

  return formattedCurrency;
}

// // Generates a formatter from Intl.NumberFormat
// function generateIntlNumberFormatter(isoCode, locale, numDecimals) {
//   let formatter;
//   try {
//     formatter = new Intl.NumberFormat(locale, {
//       style: "currency",
//       currency: isoCode,
//       currencyDisplay: "symbol",
//       minimumFractionDigits: numDecimals,
//       maximumFractionDigits: numDecimals
//     });
//   } catch (e) {
//     // Unsupported currency, etc.
//     // Use primitive fallback
//     return generateFallbackFormatter(isoCode, locale, numDecimals);
//   }
//   return formatter;
// }

function generateFallbackFormatter(isoCode, locale, numDecimals = 2) {
  isoCode = isoCode.toUpperCase();

  const formatValue = value =>
    numDecimals > 2
      ? `${value.toFixed(numDecimals)} ${isoCode}`
      : `${value.toLocaleString(locale)} ${isoCode}`;

  return {
    format: formatValue
  };
}

function generateFormatter(isoCode, locale, numDecimals) {
  return generateFallbackFormatter(isoCode, locale, numDecimals);
}

// State variables
let currentISOCode: keyof typeof supportedCurrencySymbols;
let currentLocale;
let currencyFormatterNormal;
let currencyFormatterNoDecimal;
let currencyFormatterMedium;
let currencyFormatterTwoDecimal;
let currencyFormatterSmall;
let currencyFormatterVerySmall;

function initializeFormatters(isoCode, locale) {
  currencyFormatterNormal = generateFormatter(isoCode, locale);
  currencyFormatterNoDecimal = generateFormatter(isoCode, locale, 0);
  currencyFormatterMedium = generateFormatter(isoCode, locale, 3);
  currencyFormatterTwoDecimal = generateFormatter(isoCode, locale, 2);
  currencyFormatterSmall = generateFormatter(isoCode, locale, 6);
  currencyFormatterVerySmall = generateFormatter(isoCode, locale, 8);
}

// Moderate crypto amount threshold
const MEDIUM_CRYPTO_THRESHOLD = 50;
// Large crypto amount threshold
const LARGE_CRYPTO_THRESHOLD = 1000;

export function formatCurrency(amount, isoCode, locale = "en", raw = false) {
  isoCode = isoCode.toUpperCase();

  if (currentISOCode !== isoCode || currentLocale != locale) {
    currentISOCode = isoCode;
    currentLocale = locale;

    // Formatters are tied to currency code, we try to initialize as infrequently as possible.
    initializeFormatters(isoCode, locale);
  }

  let price = parseFloat(amount);

  if (raw) {
    if (amount === 0.0) {
      return price.toFixed(2);
    }
    return price.toPrecision(8);
  }

  if (amount === 0.0) {
    return formatCurrencyOverride(
      currencyFormatterNormal.format(amount),
      locale
    );
  } else if (price >= LARGE_CRYPTO_THRESHOLD) {
    // Large crypto amount, show no decimal value
    return formatCurrencyOverride(
      currencyFormatterNoDecimal.format(amount),
      locale
    );
  } else if (
    price >= MEDIUM_CRYPTO_THRESHOLD &&
    price < LARGE_CRYPTO_THRESHOLD
  ) {
    // Medium crypto amount, show 3 fraction digits
    return formatCurrencyOverride(
      currencyFormatterMedium.format(amount),
      locale
    );
  } else if (price >= 1.0 && price < MEDIUM_CRYPTO_THRESHOLD) {
    //  crypto amount, show 6 fraction digits
    return formatCurrencyOverride(
      currencyFormatterSmall.format(amount),
      locale
    );
  } else {
    // Crypto amount < 1, show 8 fraction digits
    return formatCurrencyOverride(
      currencyFormatterVerySmall.format(amount),
      locale
    );
  }
}
