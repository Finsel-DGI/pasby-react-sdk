"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomAlphaNumeric = void 0;
/**
 * Random string generator helper
 * @param {number} length
 * @return {string} value
 */
function generateRandomAlphaNumeric(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.generateRandomAlphaNumeric = generateRandomAlphaNumeric;
//# sourceMappingURL=utils.js.map