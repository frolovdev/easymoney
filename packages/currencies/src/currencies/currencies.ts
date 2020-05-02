import { CurrencyMap } from "../types";
import { CurrencyUnitISO } from "@easymoney/core";
import { convertCurrencyMapToArray } from "../convertCurrencyMapToArray";

export const currenciesMap: CurrencyMap<CurrencyUnitISO> = {
  AFN: {
    code: "AFN",
    currency: "Afghani",
    minorUnit: 2,
    numericCode: 971
  },
  EUR: {
    code: "EUR",
    currency: "Euro",
    minorUnit: 2,
    numericCode: 978
  },
  ALL: {
    code: "ALL",
    currency: "Lek",
    minorUnit: 2,
    numericCode: 8
  },
  DZD: {
    code: "DZD",
    currency: "Algerian Dinar",
    minorUnit: 2,
    numericCode: 12
  },
  USD: {
    code: "USD",
    currency: "US Dollar",
    minorUnit: 2,
    numericCode: 840
  },
  AOA: {
    code: "AOA",
    currency: "Kwanza",
    minorUnit: 2,
    numericCode: 973
  },
  XCD: {
    code: "XCD",
    currency: "East Caribbean Dollar",
    minorUnit: 2,
    numericCode: 951
  },
  ARS: {
    code: "ARS",
    currency: "Argentine Peso",
    minorUnit: 2,
    numericCode: 32
  },
  AMD: {
    code: "AMD",
    currency: "Armenian Dram",
    minorUnit: 2,
    numericCode: 51
  },

  AWG: {
    code: "AWG",
    currency: "Aruban Florin",
    minorUnit: 2,
    numericCode: 533
  },

  AUD: {
    code: "AUD",
    currency: "Australian Dollar",
    minorUnit: 2,
    numericCode: 36
  },

  AZN: {
    code: "AZN",
    currency: "Azerbaijan Manat",
    minorUnit: 2,
    numericCode: 944
  },

  BSD: {
    code: "BSD",
    currency: "Bahamian Dollar",
    minorUnit: 2,
    numericCode: 44
  },

  BHD: {
    code: "BHD",
    currency: "Bahraini Dinar",
    minorUnit: 3,
    numericCode: 48
  },

  BDT: {
    code: "BDT",
    currency: "Taka",
    minorUnit: 2,
    numericCode: 50
  },

  BBD: {
    code: "BBD",
    currency: "Barbados Dollar",
    minorUnit: 2,
    numericCode: 52
  },

  BYN: {
    code: "BYN",
    currency: "Belarusian Ruble",
    minorUnit: 2,
    numericCode: 933
  },

  BZD: {
    code: "BZD",
    currency: "Belize Dollar",
    minorUnit: 2,
    numericCode: 84
  },

  XOF: {
    code: "XOF",
    currency: "CFA Franc BCEAO",
    minorUnit: 0,
    numericCode: 952
  },

  BMD: {
    code: "BMD",
    currency: "Bermudian Dollar",
    minorUnit: 2,
    numericCode: 60
  },

  INR: {
    code: "INR",
    currency: "Indian Rupee",
    minorUnit: 2,
    numericCode: 356
  },

  BTN: {
    code: "BTN",
    currency: "Ngultrum",
    minorUnit: 2,
    numericCode: 64
  },

  BOB: {
    code: "BOB",
    currency: "Boliviano",
    minorUnit: 2,
    numericCode: 68
  },

  BOV: {
    code: "BOV",
    currency: "Mvdol",
    minorUnit: 2,
    numericCode: 984
  },

  BAM: {
    code: "BAM",
    currency: "Convertible Mark",
    minorUnit: 2,
    numericCode: 977
  },

  BWP: {
    code: "BWP",
    currency: "Pula",
    minorUnit: 2,
    numericCode: 72
  },

  NOK: {
    code: "NOK",
    currency: "Norwegian Krone",
    minorUnit: 2,
    numericCode: 578
  },

  BRL: {
    code: "BRL",
    currency: "Brazilian Real",
    minorUnit: 2,
    numericCode: 986
  },

  BND: {
    code: "BND",
    currency: "Brunei Dollar",
    minorUnit: 2,
    numericCode: 96
  },

  BGN: {
    code: "BGN",
    currency: "Bulgarian Lev",
    minorUnit: 2,
    numericCode: 975
  },

  BIF: {
    code: "BIF",
    currency: "Burundi Franc",
    minorUnit: 0,
    numericCode: 108
  },

  CVE: {
    code: "CVE",
    currency: "Cabo Verde Escudo",
    minorUnit: 2,
    numericCode: 132
  },

  KHR: {
    code: "KHR",
    currency: "Riel",
    minorUnit: 2,
    numericCode: 116
  },

  XAF: {
    code: "XAF",
    currency: "CFA Franc BEAC",
    minorUnit: 0,
    numericCode: 950
  },

  CAD: {
    code: "CAD",
    currency: "Canadian Dollar",
    minorUnit: 2,
    numericCode: 124
  },

  KYD: {
    code: "KYD",
    currency: "Cayman Islands Dollar",
    minorUnit: 2,
    numericCode: 136
  },

  CLP: {
    code: "CLP",
    currency: "Chilean Peso",
    minorUnit: 0,
    numericCode: 152
  },

  CLF: {
    code: "CLF",
    currency: "Unidad de Fomento",
    minorUnit: 4,
    numericCode: 990
  },

  CNY: {
    code: "CNY",
    currency: "Yuan Renminbi",
    minorUnit: 2,
    numericCode: 156
  },

  COP: {
    code: "COP",
    currency: "Colombian Peso",
    minorUnit: 2,
    numericCode: 170
  },

  COU: {
    code: "COU",
    currency: "Unidad de Valor Real",
    minorUnit: 2,
    numericCode: 970
  },

  KMF: {
    code: "KMF",
    currency: "Comorian Franc ",
    minorUnit: 0,
    numericCode: 174
  },

  CDF: {
    code: "CDF",
    currency: "Congolese Franc",
    minorUnit: 2,
    numericCode: 976
  },

  NZD: {
    code: "NZD",
    currency: "New Zealand Dollar",
    minorUnit: 2,
    numericCode: 554
  },

  CRC: {
    code: "CRC",
    currency: "Costa Rican Colon",
    minorUnit: 2,
    numericCode: 188
  },

  HRK: {
    code: "HRK",
    currency: "Kuna",
    minorUnit: 2,
    numericCode: 191
  },

  CUP: {
    code: "CUP",
    currency: "Cuban Peso",
    minorUnit: 2,
    numericCode: 192
  },

  CUC: {
    code: "CUC",
    currency: "Peso Convertible",
    minorUnit: 2,
    numericCode: 931
  },

  ANG: {
    code: "ANG",
    currency: "Netherlands Antillean Guilder",
    minorUnit: 2,
    numericCode: 532
  },

  CZK: {
    code: "CZK",
    currency: "Czech Koruna",
    minorUnit: 2,
    numericCode: 203
  },

  DKK: {
    code: "DKK",
    currency: "Danish Krone",
    minorUnit: 2,
    numericCode: 208
  },

  DJF: {
    code: "DJF",
    currency: "Djibouti Franc",
    minorUnit: 0,
    numericCode: 262
  },

  DOP: {
    code: "DOP",
    currency: "Dominican Peso",
    minorUnit: 2,
    numericCode: 214
  },

  EGP: {
    code: "EGP",
    currency: "Egyptian Pound",
    minorUnit: 2,
    numericCode: 818
  },

  SVC: {
    code: "SVC",
    currency: "El Salvador Colon",
    minorUnit: 2,
    numericCode: 222
  },

  ERN: {
    code: "ERN",
    currency: "Nakfa",
    minorUnit: 2,
    numericCode: 232
  },

  ETB: {
    code: "ETB",
    currency: "Ethiopian Birr",
    minorUnit: 2,
    numericCode: 230
  },

  FKP: {
    code: "FKP",
    currency: "Falkland Islands Pound",
    minorUnit: 2,
    numericCode: 238
  },

  FJD: {
    code: "FJD",
    currency: "Fiji Dollar",
    minorUnit: 2,
    numericCode: 242
  },

  XPF: {
    code: "XPF",
    currency: "CFP Franc",
    minorUnit: 0,
    numericCode: 953
  },

  GMD: {
    code: "GMD",
    currency: "Dalasi",
    minorUnit: 2,
    numericCode: 270
  },

  GEL: {
    code: "GEL",
    currency: "Lari",
    minorUnit: 2,
    numericCode: 981
  },

  GHS: {
    code: "GHS",
    currency: "Ghana Cedi",
    minorUnit: 2,
    numericCode: 936
  },

  GIP: {
    code: "GIP",
    currency: "Gibraltar Pound",
    minorUnit: 2,
    numericCode: 292
  },

  GTQ: {
    code: "GTQ",
    currency: "Quetzal",
    minorUnit: 2,
    numericCode: 320
  },

  GBP: {
    code: "GBP",
    currency: "Pound Sterling",
    minorUnit: 2,
    numericCode: 826
  },

  GNF: {
    code: "GNF",
    currency: "Guinean Franc",
    minorUnit: 0,
    numericCode: 324
  },

  GYD: {
    code: "GYD",
    currency: "Guyana Dollar",
    minorUnit: 2,
    numericCode: 328
  },

  HTG: {
    code: "HTG",
    currency: "Gourde",
    minorUnit: 2,
    numericCode: 332
  },

  HNL: {
    code: "HNL",
    currency: "Lempira",
    minorUnit: 2,
    numericCode: 340
  },

  HKD: {
    code: "HKD",
    currency: "Hong Kong Dollar",
    minorUnit: 2,
    numericCode: 344
  },

  HUF: {
    code: "HUF",
    currency: "Forint",
    minorUnit: 2,
    numericCode: 348
  },

  ISK: {
    code: "ISK",
    currency: "Iceland Krona",
    minorUnit: 0,
    numericCode: 352
  },

  IDR: {
    code: "IDR",
    currency: "Rupiah",
    minorUnit: 2,
    numericCode: 360
  },

  XDR: {
    code: "XDR",
    currency: "SDR (Special Drawing Right)",
    minorUnit: 0,
    numericCode: 960
  },

  IRR: {
    code: "IRR",
    currency: "Iranian Rial",
    minorUnit: 2,
    numericCode: 364
  },

  IQD: {
    code: "IQD",
    currency: "Iraqi Dinar",
    minorUnit: 3,
    numericCode: 368
  },

  ILS: {
    code: "ILS",
    currency: "New Israeli Sheqel",
    minorUnit: 2,
    numericCode: 376
  },

  JMD: {
    code: "JMD",
    currency: "Jamaican Dollar",
    minorUnit: 2,
    numericCode: 388
  },

  JPY: {
    code: "JPY",
    currency: "Yen",
    minorUnit: 0,
    numericCode: 392
  },

  JOD: {
    code: "JOD",
    currency: "Jordanian Dinar",
    minorUnit: 3,
    numericCode: 400
  },

  KZT: {
    code: "KZT",
    currency: "Tenge",
    minorUnit: 2,
    numericCode: 398
  },

  KES: {
    code: "KES",
    currency: "Kenyan Shilling",
    minorUnit: 2,
    numericCode: 404
  },

  KPW: {
    code: "KPW",
    currency: "North Korean Won",
    minorUnit: 2,
    numericCode: 408
  },

  KRW: {
    code: "KRW",
    currency: "Won",
    minorUnit: 0,
    numericCode: 410
  },

  KWD: {
    code: "KWD",
    currency: "Kuwaiti Dinar",
    minorUnit: 3,
    numericCode: 414
  },

  KGS: {
    code: "KGS",
    currency: "Som",
    minorUnit: 2,
    numericCode: 417
  },

  LAK: {
    code: "LAK",
    currency: "Lao Kip",
    minorUnit: 2,
    numericCode: 418
  },

  LBP: {
    code: "LBP",
    currency: "Lebanese Pound",
    minorUnit: 2,
    numericCode: 422
  },

  LSL: {
    code: "LSL",
    currency: "Loti",
    minorUnit: 2,
    numericCode: 426
  },

  ZAR: {
    code: "ZAR",
    currency: "Rand",
    minorUnit: 2,
    numericCode: 710
  },

  LRD: {
    code: "LRD",
    currency: "Liberian Dollar",
    minorUnit: 2,
    numericCode: 430
  },

  LYD: {
    code: "LYD",
    currency: "Libyan Dinar",
    minorUnit: 3,
    numericCode: 434
  },

  CHF: {
    code: "CHF",
    currency: "Swiss Franc",
    minorUnit: 2,
    numericCode: 756
  },

  MOP: {
    code: "MOP",
    currency: "Pataca",
    minorUnit: 2,
    numericCode: 446
  },

  MKD: {
    code: "MKD",
    currency: "Denar",
    minorUnit: 2,
    numericCode: 807
  },

  MGA: {
    code: "MGA",
    currency: "Malagasy Ariary",
    minorUnit: 2,
    numericCode: 969
  },

  MWK: {
    code: "MWK",
    currency: "Malawi Kwacha",
    minorUnit: 2,
    numericCode: 454
  },

  MYR: {
    code: "MYR",
    currency: "Malaysian Ringgit",
    minorUnit: 2,
    numericCode: 458
  },

  MVR: {
    code: "MVR",
    currency: "Rufiyaa",
    minorUnit: 2,
    numericCode: 462
  },

  MRU: {
    code: "MRU",
    currency: "Ouguiya",
    minorUnit: 2,
    numericCode: 929
  },

  MUR: {
    code: "MUR",
    currency: "Mauritius Rupee",
    minorUnit: 2,
    numericCode: 480
  },

  XUA: {
    code: "XUA",
    currency: "ADB Unit of Account",
    minorUnit: 0,
    numericCode: 965
  },

  MXN: {
    code: "MXN",
    currency: "Mexican Peso",
    minorUnit: 2,
    numericCode: 484
  },

  MXV: {
    code: "MXV",
    currency: "Mexican Unidad de Inversion (UDI)",
    minorUnit: 2,
    numericCode: 979
  },

  MDL: {
    code: "MDL",
    currency: "Moldovan Leu",
    minorUnit: 2,
    numericCode: 498
  },

  MNT: {
    code: "MNT",
    currency: "Tugrik",
    minorUnit: 2,
    numericCode: 496
  },

  MAD: {
    code: "MAD",
    currency: "Moroccan Dirham",
    minorUnit: 2,
    numericCode: 504
  },

  MZN: {
    code: "MZN",
    currency: "Mozambique Metical",
    minorUnit: 2,
    numericCode: 943
  },

  MMK: {
    code: "MMK",
    currency: "Kyat",
    minorUnit: 2,
    numericCode: 104
  },

  NAD: {
    code: "NAD",
    currency: "Namibia Dollar",
    minorUnit: 2,
    numericCode: 516
  },

  NPR: {
    code: "NPR",
    currency: "Nepalese Rupee",
    minorUnit: 2,
    numericCode: 524
  },

  NIO: {
    code: "NIO",
    currency: "Cordoba Oro",
    minorUnit: 2,
    numericCode: 558
  },

  NGN: {
    code: "NGN",
    currency: "Naira",
    minorUnit: 2,
    numericCode: 566
  },

  OMR: {
    code: "OMR",
    currency: "Rial Omani",
    minorUnit: 3,
    numericCode: 512
  },

  PKR: {
    code: "PKR",
    currency: "Pakistan Rupee",
    minorUnit: 2,
    numericCode: 586
  },

  PAB: {
    code: "PAB",
    currency: "Balboa",
    minorUnit: 2,
    numericCode: 590
  },

  PGK: {
    code: "PGK",
    currency: "Kina",
    minorUnit: 2,
    numericCode: 598
  },

  PYG: {
    code: "PYG",
    currency: "Guarani",
    minorUnit: 0,
    numericCode: 600
  },

  PEN: {
    code: "PEN",
    currency: "Sol",
    minorUnit: 2,
    numericCode: 604
  },

  PHP: {
    code: "PHP",
    currency: "Philippine Piso",
    minorUnit: 2,
    numericCode: 608
  },

  PLN: {
    code: "PLN",
    currency: "Zloty",
    minorUnit: 2,
    numericCode: 985
  },

  QAR: {
    code: "QAR",
    currency: "Qatari Rial",
    minorUnit: 2,
    numericCode: 634
  },

  RON: {
    code: "RON",
    currency: "Romanian Leu",
    minorUnit: 2,
    numericCode: 946
  },

  RUB: {
    code: "RUB",
    currency: "Russian Ruble",
    minorUnit: 2,
    numericCode: 643
  },

  RWF: {
    code: "RWF",
    currency: "Rwanda Franc",
    minorUnit: 0,
    numericCode: 646
  },

  SHP: {
    code: "SHP",
    currency: "Saint Helena Pound",
    minorUnit: 2,
    numericCode: 654
  },

  WST: {
    code: "WST",
    currency: "Tala",
    minorUnit: 2,
    numericCode: 882
  },

  STN: {
    code: "STN",
    currency: "Dobra",
    minorUnit: 2,
    numericCode: 930
  },

  SAR: {
    code: "SAR",
    currency: "Saudi Riyal",
    minorUnit: 2,
    numericCode: 682
  },

  RSD: {
    code: "RSD",
    currency: "Serbian Dinar",
    minorUnit: 2,
    numericCode: 941
  },

  SCR: {
    code: "SCR",
    currency: "Seychelles Rupee",
    minorUnit: 2,
    numericCode: 690
  },

  SLL: {
    code: "SLL",
    currency: "Leone",
    minorUnit: 2,
    numericCode: 694
  },

  SGD: {
    code: "SGD",
    currency: "Singapore Dollar",
    minorUnit: 2,
    numericCode: 702
  },

  XSU: {
    code: "XSU",
    currency: "Sucre",
    minorUnit: 0,
    numericCode: 994
  },

  SBD: {
    code: "SBD",
    currency: "Solomon Islands Dollar",
    minorUnit: 2,
    numericCode: 90
  },

  SOS: {
    code: "SOS",
    currency: "Somali Shilling",
    minorUnit: 2,
    numericCode: 706
  },

  SSP: {
    code: "SSP",
    currency: "South Sudanese Pound",
    minorUnit: 2,
    numericCode: 728
  },

  LKR: {
    code: "LKR",
    currency: "Sri Lanka Rupee",
    minorUnit: 2,
    numericCode: 144
  },

  SDG: {
    code: "SDG",
    currency: "Sudanese Pound",
    minorUnit: 2,
    numericCode: 938
  },

  SRD: {
    code: "SRD",
    currency: "Surinam Dollar",
    minorUnit: 2,
    numericCode: 968
  },

  SZL: {
    code: "SZL",
    currency: "Lilangeni",
    minorUnit: 2,
    numericCode: 748
  },

  SEK: {
    code: "SEK",
    currency: "Swedish Krona",
    minorUnit: 2,
    numericCode: 752
  },

  CHE: {
    code: "CHE",
    currency: "WIR Euro",
    minorUnit: 2,
    numericCode: 947
  },

  CHW: {
    code: "CHW",
    currency: "WIR Franc",
    minorUnit: 2,
    numericCode: 948
  },

  SYP: {
    code: "SYP",
    currency: "Syrian Pound",
    minorUnit: 2,
    numericCode: 760
  },

  TWD: {
    code: "TWD",
    currency: "New Taiwan Dollar",
    minorUnit: 2,
    numericCode: 901
  },

  TJS: {
    code: "TJS",
    currency: "Somoni",
    minorUnit: 2,
    numericCode: 972
  },

  TZS: {
    code: "TZS",
    currency: "Tanzanian Shilling",
    minorUnit: 2,
    numericCode: 834
  },

  THB: {
    code: "THB",
    currency: "Baht",
    minorUnit: 2,
    numericCode: 764
  },

  TOP: {
    code: "TOP",
    currency: "Pa’anga",
    minorUnit: 2,
    numericCode: 776
  },

  TTD: {
    code: "TTD",
    currency: "Trinidad and Tobago Dollar",
    minorUnit: 2,
    numericCode: 780
  },

  TND: {
    code: "TND",
    currency: "Tunisian Dinar",
    minorUnit: 3,
    numericCode: 788
  },

  TRY: {
    code: "TRY",
    currency: "Turkish Lira",
    minorUnit: 2,
    numericCode: 949
  },

  TMT: {
    code: "TMT",
    currency: "Turkmenistan New Manat",
    minorUnit: 2,
    numericCode: 934
  },

  UGX: {
    code: "UGX",
    currency: "Uganda Shilling",
    minorUnit: 0,
    numericCode: 800
  },

  UAH: {
    code: "UAH",
    currency: "Hryvnia",
    minorUnit: 2,
    numericCode: 980
  },

  AED: {
    code: "AED",
    currency: "UAE Dirham",
    minorUnit: 2,
    numericCode: 784
  },

  USN: {
    code: "USN",
    currency: "US Dollar (Next day)",
    minorUnit: 2,
    numericCode: 997
  },

  UYU: {
    code: "UYU",
    currency: "Peso Uruguayo",
    minorUnit: 2,
    numericCode: 858
  },

  UYI: {
    code: "UYI",
    currency: "Uruguay Peso en Unidades Indexadas (URUIURUI)",
    minorUnit: 0,
    numericCode: 940
  },

  UZS: {
    code: "UZS",
    currency: "Uzbekistan Sum",
    minorUnit: 2,
    numericCode: 860
  },

  VUV: {
    code: "VUV",
    currency: "Vatu",
    minorUnit: 0,
    numericCode: 548
  },

  VEF: {
    code: "VEF",
    currency: "Bolívar",
    minorUnit: 2,
    numericCode: 937
  },

  VND: {
    code: "VND",
    currency: "Dong",
    minorUnit: 0,
    numericCode: 704
  },

  YER: {
    code: "YER",
    currency: "Yemeni Rial",
    minorUnit: 2,
    numericCode: 886
  },

  ZMW: {
    code: "ZMW",
    currency: "Zambian Kwacha",
    minorUnit: 2,
    numericCode: 967
  },

  ZWL: {
    code: "ZWL",
    currency: "Zimbabwe Dollar",
    minorUnit: 2,
    numericCode: 932
  },

  XBA: {
    code: "XBA",
    currency: "Bond Markets Unit European Composite Unit (EURCO)",
    minorUnit: 0,
    numericCode: 955
  },

  XBB: {
    code: "XBB",
    currency: "Bond Markets Unit European Monetary Unit (E.M.U.-6)",
    minorUnit: 0,
    numericCode: 956
  },

  XBC: {
    code: "XBC",
    currency: "Bond Markets Unit European Unit of Account 9 (E.U.A.-9)",
    minorUnit: 0,
    numericCode: 957
  },

  XBD: {
    code: "XBD",
    currency: "Bond Markets Unit European Unit of Account 17 (E.U.A.-17)",
    minorUnit: 0,
    numericCode: 958
  },

  XTS: {
    code: "XTS",
    currency: "Codes specifically reserved for testing purposes",
    minorUnit: 0,
    numericCode: 963
  },

  XXX: {
    code: "XXX",
    currency:
      "The codes assigned for transactions where no currency is involved",
    minorUnit: 0,
    numericCode: 999
  },

  XAU: {
    code: "XAU",
    currency: "Gold",
    minorUnit: 0,
    numericCode: 959
  },

  XPD: {
    code: "XPD",
    currency: "Palladium",
    minorUnit: 0,
    numericCode: 964
  },

  XPT: {
    code: "XPT",
    currency: "Platinum",
    minorUnit: 0,
    numericCode: 962
  },

  XAG: {
    code: "XAG",
    currency: "Silver",
    minorUnit: 0,
    numericCode: 961
  }
} as const;

export const currencies = convertCurrencyMapToArray(currenciesMap);
