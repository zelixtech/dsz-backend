const express = require('express')
const app = express()
require('dotenv').config()
// const mysql = require('mysql');
require('./startup/routes')(app)

const { sequelize } = require('./startup/db')

app.get('/', async (req, res) => {
  try {
    // let data = await sequelize.query('SELECT * from employee LIMIT 1')
    // console.log(data)
    res.send('HELLO')
  } catch (err) {
    console.log(err)
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
