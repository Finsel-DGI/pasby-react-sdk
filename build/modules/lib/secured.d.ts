import { CipherType } from "../interfaces/shared:types";
/**
 * Encrypt function
 * @param {string} text content you want to encrypt
 * @param {string} key provide a secret key for encryption process
 * @return {CipherType} returns cipher.
 */
export declare function jwtEncrypt(text: string, key: string): CipherType;
