require('dotenv').config()
const express = require('express')
const router = express.Router()

const { quotationController } = require('../controllers/')

router.post('/:query_id', quotationController.createQuotation)
router.get('/:quotation_id', quotationController.retrieveQuotation)

module.exports = router
