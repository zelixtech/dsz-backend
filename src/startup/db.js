const { Sequelize } = require('sequelize')
const models = require('../models/init-models')
const expressSession = require('express-session')
const SessionStore = require('express-session-sequelize')(expressSession.Store)
require('dotenv').config()
const { dbLogger, apiLogger } = require('./logger')

const dbLogging = (msg) => {
  dbLogger.info(msg)
}

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
      max: 100,
    },
    dialectOptions: {
      socketPath: '/var/run/mysqld/mysqld.sock',
    },
    logging: dbLogging,
  }
)

const createPool = async () => {
  try {
    await sequelize.authenticate()
    // await sequelize.sync({ alter: true })
    apiLogger.info('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
createPool()

const db = models(sequelize)
// const sessionStore = new MySQLStore({}/* session store options */, sequelize);
const sequelizeSessionStore = new SessionStore({
  db: sequelize,
})

module.exports = {
  sequelize,
  db,
  sequelizeSessionStore,
  expressSession,
}
