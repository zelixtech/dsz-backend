require('dotenv').config()
const express = require('express')
const router = express.Router()

const { quotationController } = require('../controllers/')
const { generateQuotationController } = require('../controllers/')

router.post('/', quotationController.createQuotation)
router.post('/generate', generateQuotationController.generatePdf)

module.exports = router
