const winston = require('winston')
const { format } = winston
const path = require('path')
const logFormat = format.printf(
  (info) => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
)

const morganLogger = new winston.createLogger({
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    // Format the metadata object
    format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] })
  ),

  transports: [
    new winston.transports.File({
      filename: './logs/morgan-error.log',
      level: 'error',
      format: winston.format.combine(winston.format.json()),
    }),
    new winston.transports.File({
      filename: './logs/morgan.log',
      level: 'info',
      format: winston.format.combine(winston.format.json()),
    }),
  ],

  exitOnError: false,
})

const dbLogger = new winston.createLogger({
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    // Format the metadata object
    format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] })
  ),
  transports: [
    new winston.transports.File({
      filename: './logs/db-error.log',
      level: 'error',
      format: winston.format.combine(winston.format.json()),
    }),
    new winston.transports.File({
      filename: './logs/db.log',
      level: 'info',
      format: winston.format.combine(winston.format.json()),
    }),
  ],
  exitOnError: false,
})

const apiLogger = new winston.createLogger({
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    // Format the metadata object
    format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] })
  ),

  transports: [
    new winston.transports.File({
      filename: './logs/api-error.log',
      level: 'error',
      format: winston.format.combine(winston.format.json()),
    }),
    new winston.transports.File({
      filename: './logs/api.log',
      level: 'info',
      format: winston.format.combine(winston.format.json()),
    }),
  ],
  exitOnError: false,
})

module.exports = { apiLogger, dbLogger, morganLogger }
