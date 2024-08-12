export const formatPercentage = (value: string | number): string => {
  const numericalValue = parseFloat(value.toString());
  return isNaN(numericalValue) ? "0.000%" : `${numericalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}%`;
};
