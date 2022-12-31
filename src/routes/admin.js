require('dotenv').config()
const express = require('express')
const router = express.Router()

const { adminController } = require('../controllers/')
const { allowAdmin } = require('../middlewares')

router.get('/stats', allowAdmin, adminController.getStats)

module.exports = router
