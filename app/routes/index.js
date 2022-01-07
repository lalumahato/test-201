const express = require('express');
const commonMethods = require('@common-methods');
const HTTP_STATUS_CODES = require('@utils/status-code');
const logger = require('@winston-config');

const router = express.Router();

router.get('/', (req, res) => res.send({ title: 'NFHS new architecture apis' }));

router.all('*', (req, res) => {
  const statusCode = HTTP_STATUS_CODES.NOT_FOUND;
  logger.error(`${statusCode} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  return res.status(statusCode).send(commonMethods.notFoundResponse('url.not.found'));
});

module.exports = router;
