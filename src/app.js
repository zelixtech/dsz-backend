const express = require('express')
const app = express()
require('dotenv').config()
// const mysql = require('mysql');
require('./startup/routes')(app)
const { apiLogger } = require('./startup/logger')

const { sequelize } = require('./startup/db')
const createProductList = require('./startup/createProductList')

app.get('/', async (req, res) => {
  try {
    res.send('HELLO')
  } catch (err) {
    apiLogger.error(err)
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => apiLogger.info(`server running on PORT ${PORT}`))
