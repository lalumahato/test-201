/* eslint-disable no-return-assign */
const HTTP_STATUS_CODES = require('./status-code');
const { STATUS_CODE, STATUS_MSG } = require('./constant');

class CommonMethods {
  static successResponse(data, pagination) {
    return {
      status: HTTP_STATUS_CODES.OK,
      code: STATUS_CODE.SUCCESS,
      data,
      pagination,
    };
  }

  static createdResponse(data) {
    return {
      status: HTTP_STATUS_CODES.CREATED,
      code: STATUS_CODE.CREATED,
      data,
    };
  }

  static paginatedResponse(data, pagination) {
    return {
      status: HTTP_STATUS_CODES.OK,
      data,
      pagination,
    };
  }

  static deletedResponse() {
    return {
      status: HTTP_STATUS_CODES.UPDATED,
    };
  }

  static errorResponse(code) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: STATUS_MSG.BAD_REQUEST,
      code: code || STATUS_CODE.BAD_REQUEST,
    };
  }

  static missingParamResponse(code) {
    return {
      status: HTTP_STATUS_CODES.BAD_REQUEST,
      message: STATUS_MSG.BAD_REQUEST,
      code: code || STATUS_CODE.MISSING_REQUIRED_PARAMS,
    };
  }

  static forbiddenResponse(code) {
    return {
      status: HTTP_STATUS_CODES.FORBIDDEN,
      message: STATUS_MSG.FORBIDDEN,
      code: code || STATUS_CODE.ACTION_NOT_ALLOWED,
    };
  }

  static notFoundResponse(code) {
    return {
      status: HTTP_STATUS_CODES.NOT_FOUND,
      message: STATUS_MSG.NOT_FOUND,
      code: code || STATUS_CODE.NOT_FOUND,
    };
  }

  static conflictResponse(code) {
    return {
      status: HTTP_STATUS_CODES.ALREADY_EXISTS,
      message: STATUS_MSG.CONFLICT,
      code: code || STATUS_CODE.CONFLICT,
    };
  }

  static multiStatusResponse(data, code) {
    return {
      status: HTTP_STATUS_CODES.MULTI_STATUS,
      code: code || STATUS_CODE.ACTION_NOT_ALLOWED,
      data,
    };
  }
}

module.exports = CommonMethods;
