require('module-alias/register');
const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const logger = require('@winston-config');
const swaggerDocument = require('./swagger-ui/swagger.json');
const indexRouter = require('./routes');

// Initialize app
const app = express();

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ path: envFile });

// Listening server
app.listen(process.env.PORT, () => logger.info(`Application running on port:${process.env.PORT}`));

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', indexRouter);

// Error handler
app.use((error, req, res) => {
  logger.error(
    `${error.status || 500} - ${error.message
    } - ${req.originalUrl}
  - ${req.method} - ${req.ip}`,
  );
  return res.status(500).send({ error });
});

module.exports = app;
