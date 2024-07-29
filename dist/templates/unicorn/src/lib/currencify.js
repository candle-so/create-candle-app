"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencify = void 0;
const currencify = (input, currency = "USD", locale = "en-US") => {
    const numberValue = typeof input === "string" ? parseFloat(input) : input;
    // Handle invalid inputs
    if (isNaN(numberValue))
        return "$0.00";
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(numberValue);
};
exports.currencify = currencify;
