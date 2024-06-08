export const currencify = (input: number | string, currency: string = "USD", locale: string = "en-US"): string => {
  const numberValue = typeof input === "string" ? parseFloat(input) : input;

  // Handle invalid inputs
  if (isNaN(numberValue)) return "$0.00";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numberValue);
};
