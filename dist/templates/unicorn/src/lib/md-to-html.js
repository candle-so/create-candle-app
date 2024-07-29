"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMdToHtml = void 0;
const showdown_1 = __importDefault(require("showdown"));
const convertMdToHtml = (md) => {
    const converter = new showdown_1.default.Converter();
    return converter.makeHtml(md);
};
exports.convertMdToHtml = convertMdToHtml;
