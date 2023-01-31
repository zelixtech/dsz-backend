const winston = require('winston')

const morganLogger = new winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: './logs/morgan-error.log',
      level: 'error',
    }),
    new winston.transports.File({
      filename: './logs/morgan.log',
      level: 'info',
    }),
  ],
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'DD-MMM-YYYY HH:mm:ss',
    }),
    winston.format.json()
  ),
  exitOnError: false,
})

const dbLogger = new winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: './logs/db-error.log',
      level: 'error',
    }),
    new winston.transports.File({
      filename: './logs/db.log',
      level: 'info',
    }),
  ],
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'DD-MMM-YYYY HH:mm:ss',
    }),
    winston.format.json()
  ),
  exitOnError: false,
})

const apiLogger = new winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: './logs/api-error.log',
      level: 'error',
    }),
    new winston.transports.File({
      filename: './logs/api.log',
      level: 'info',
    }),
  ],
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'DD-MMM-YYYY HH:mm:ss',
    }),
    winston.format.json()
  ),
  exitOnError: false,
})

module.exports = { apiLogger, dbLogger, morganLogger }
