"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPhoneNumber = void 0;
const formatPhoneNumber = (value) => {
    if (!value)
        return value;
    const cleanedValue = value.replace(/\D/g, "");
    if (cleanedValue.length !== 10) {
        return value; // return as-is if not exactly 10 digits
    }
    const parts = cleanedValue.match(/(\d{3})(\d{3})(\d{4})/);
    if (parts) {
        return `(${parts[1]}) ${parts[2]}-${parts[3]}`;
    }
    return value;
};
exports.formatPhoneNumber = formatPhoneNumber;
