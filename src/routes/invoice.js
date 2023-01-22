require('dotenv').config()
const express = require('express')
const router = express.Router()

const { invoiceController } = require('../controllers/')
const { allowEmployee } = require('../middlewares')

router.post('/:client_id', allowEmployee, invoiceController.createInvoice)
router.get('/:invoice_id', allowEmployee, invoiceController.retrieveInvoice)
router.get(
  '/all/:client_id',
  allowEmployee,
  invoiceController.retrieveInvoicesOfClient
)

module.exports = router
