import * as crypto from "crypto";
import { CipherType } from "../interfaces/shared:types";

/**
 * Encrypt function
 * @param {string} text content you want to encrypt
 * @param {string} key provide a secret key for encryption process
 * @return {CipherType} returns cipher.
 */
export function jwtEncrypt(text: string, key: string): CipherType {
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv("aes-256-ctr", key, iv);

  const encrypted = Buffer.
    concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString("hex"),
    content: encrypted.toString("hex"),
  };
}