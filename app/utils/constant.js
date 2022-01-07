const dotenv = require('dotenv');

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ path: envFile });

const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const STATUS_MSG = {
  ACCEPTED: 'Accepted',
  BAD_GATEWAY: 'Bad Gateway',
  BAD_REQUEST: 'Bad Request',
  CONTINUE: 'Continue',
  CREATED: 'Created',
  FORBIDDEN: 'Forbidden',
  FOUND: 'Found',
  USER_DISABLED: 'User Disabled',
  GATEWAY_TIMEOUT: 'Gateway Timeout',
  HTTP_VERSION_NOT_SUPPORTED: 'HTTP Version Not Supported',
  INTERNAL_SERVER_ERROR: 'Internal Server Error',
  METHOD_NOT_ALLOWED: 'Method Not Allowed',
  NOT_FOUND: 'Not Found',
  OK: 'OK',
  REQUEST_TIMEOUT: 'Request Timeout',
  SERVICE_UNAVAILABLE: 'Service Unavailable',
  TOO_MANY_REQUESTS: 'Too Many Requests',
  UNAUTHORIZED: 'Unauthorized',
  CONFLICT: 'Conflict Error Possibly For Unique Constraint',
};

const STATUS_CODE = {
  SUCCESS: 'success',
  CREATED: 'created',
  MISSING_REQUIRED_PARAMS: 'missing.required.params',
  TOKEN_EXPIRED: 'authorization.token.expired',
  TOKEN_MISSING: 'authorization.token.missing',
  TOKEN_INVALID: 'authorization.token.invalid',
  NOT_FOUND: 'not.found',
  ACTION_NOT_ALLOWED: 'action.not.allowed',
  INVALID_DATA: 'invalid.data',
  INTERNAL_SERVER_ERROR: 'internal.server.error',
  BAD_REQUEST: 'bad.request',
  CONFLICT: 'conflict',
};

module.exports = {
  HTTP_METHOD,
  STATUS_MSG,
  STATUS_CODE,
};
