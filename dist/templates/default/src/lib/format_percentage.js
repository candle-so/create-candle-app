"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPercentage = void 0;
const formatPercentage = (value) => {
    const numericalValue = parseFloat(value.toString());
    return isNaN(numericalValue) ? "0.000%" : `${numericalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}%`;
};
exports.formatPercentage = formatPercentage;
