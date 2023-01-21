require('dotenv').config()
const express = require('express')
const router = express.Router()

const { invoiceController } = require('../controllers/')
const { allowEmployee } = require('../middlewares')

router.post('/createInvoice', allowEmployee, invoiceController.createInvoice)

module.exports = router
