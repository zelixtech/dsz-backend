require('dotenv').config()
const express = require('express')
const router = express.Router()

const { invoiceController } = require('../controllers/')
const { allowEmployee, allowLocal } = require('../middlewares')

router.post('/:client_id', allowLocal, invoiceController.createInvoice)
router.get('/:invoice_id', allowEmployee, invoiceController.retrieveInvoice)
router.get(
  '/all/:client_id',
  allowEmployee,
  invoiceController.retrieveInvoicesOfClient
)

module.exports = router
