"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHash = exports.convertURLEncodedToPlusEncoded = void 0;
const convertURLEncodedToPlusEncoded = (url) => {
    return url.replace(/%20/g, "+").replace(/ /g, "+").toLocaleLowerCase();
};
exports.convertURLEncodedToPlusEncoded = convertURLEncodedToPlusEncoded;
const isHash = (label, hash) => {
    if (`#${(0, exports.convertURLEncodedToPlusEncoded)(label)}` === (0, exports.convertURLEncodedToPlusEncoded)(hash))
        return true;
    return false;
};
exports.isHash = isHash;
