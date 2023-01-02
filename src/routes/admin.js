require('dotenv').config()
const express = require('express')
const router = express.Router()

const { adminController } = require('../controllers/')
const { allowAdmin } = require('../middlewares')

router.get('/stats', allowAdmin, adminController.getStats)
router.post('/ipAddress', allowAdmin, adminController.addIpAddress)
router.get('/ipAddresses', allowAdmin, adminController.showAllIpAddresses)
router.delete(
  '/ipAddress/:ip_addr_id',
  allowAdmin,
  adminController.removeIpAddress
)

module.exports = router
