export type status = 'successful' | 'handled' |
  'mismatch' | 'token-mismatch' | 'unauthorized' |
  'expiration' | 'failed' | 'extreme';

export type replyType = 'api_error' | 'param_error' | 'db_error' |
  'external_service_error' | 'session_cancel' | 'unknown_error' | 'session_required' |
  'authorization_error' | 'session_expiry' | 'invalid_request';

/**
* Cipher Model
*/
export type CipherType = {
  iv: string,
  content: string,
}

/**
 * Such is the standard response from pasby endpoints*
 */
export type APIResponseToSDK = {
  status: status;
  reason: string;
  type: replyType;
  label?: string;
  data?: Record<string, unknown>, // successful
  body?: Record<string, unknown>, // errored most likely
  helper_url?: string;
  trace?: string;
};