export enum NumberFormatType {
  MONEY = 'money',
  PERCENTAGE = 'percentage',
}

export const SYMBOLS = {
  MONEY_SIGN: '$',
  CURRENCY_SUFFIX: '.-',
  PERCENTAGE_SIGN: '%',
};

const numberFormatMap: Record<NumberFormatType, (value: number) => string> = {
  [NumberFormatType.MONEY]: (value: number) => `${SYMBOLS.MONEY_SIGN}${value.toFixed(2)}${SYMBOLS.CURRENCY_SUFFIX}`,
  [NumberFormatType.PERCENTAGE]: (value: number) => `${value.toFixed(2)}${SYMBOLS.PERCENTAGE_SIGN}`,
};

export const refactorNumber = (value: number, type: NumberFormatType): string => {
  const formatter = numberFormatMap[type];
  
  return formatter ? formatter(value) : value.toFixed(2);
};
