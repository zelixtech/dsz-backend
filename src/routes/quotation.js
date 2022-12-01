require('dotenv').config()
const express = require('express');
const router = express.Router();

const { quotationController } = require('../controllers/');

router.post('/', quotationController.createQuotation)

module.exports = router
