require('dotenv').config()
const express = require('express')
const router = express.Router()

const { quotationController } = require('../controllers/')
const {
  allowEmployee,
  allowAdmin,
  allowHR,
  allowBothAdminAndHR,
  allowLocal
} = require('../middlewares')

router.post('/:query_id', allowLocal, quotationController.createQuotation)

router.get(
  '/:quotation_id',
  allowEmployee,
  quotationController.retrieveQuotation
)

router.get(
  '/all/:query_id',
  allowEmployee,
  quotationController.retrieveQuotationsOfQuery
)

module.exports = router
