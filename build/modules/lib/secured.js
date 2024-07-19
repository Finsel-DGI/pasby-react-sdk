"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtEncrypt = void 0;
const crypto = __importStar(require("crypto"));
/**
 * Encrypt function
 * @param {string} text content you want to encrypt
 * @param {string} key provide a secret key for encryption process
 * @return {CipherType} returns cipher.
 */
function jwtEncrypt(text, key) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-256-ctr", key, iv);
    const encrypted = Buffer.
        concat([cipher.update(text), cipher.final()]);
    return {
        iv: iv.toString("hex"),
        content: encrypted.toString("hex"),
    };
}
exports.jwtEncrypt = jwtEncrypt;
//# sourceMappingURL=secured.js.map