require('dotenv').config()
const express = require('express')
const router = express.Router()

const { invoiceController } = require('../controllers/')
const {
  allowEmployee,
  allowAdmin,
  allowHR,
  allowBothAdminAndHR,
} = require('../middlewares')

router.post('/createInvoice', allowEmployee, invoiceController.createInvoice)

// router.get('/:invoice_id', allowEmployee, invoiceController.retrieveQuotation)

// router.get(
//   '/all/:invoice_id',
//   allowEmployee,
//   invoiceController.retrieveQuotationsOfQuery
// )

module.exports = router
