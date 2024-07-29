"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWrapper = void 0;
const fetchWrapper = async ({ method = "GET", url, data = {} }) => {
    if (!url)
        throw new Error("url is not set");
    const headers = { "Content-Type": "application/json" };
    let payload = { method, headers, body: JSON.stringify(data) };
    if (method === "GET")
        delete payload.body;
    const response = await fetch(url, payload);
    if (response.status > 499) {
    }
    if (response.status < 300) {
        let result = await response.json();
        return result;
    }
    let error = await response.json();
    let errorMessages = error.message || `Error ${method}-ing /${url}`;
    return { message: errorMessages, status: response.status, error };
};
exports.fetchWrapper = fetchWrapper;
