require('dotenv').config()
const express = require('express')
const router = express.Router()

const { followupController } = require('../controllers/')
const {
  allowEmployee,
  allowAdmin,
  allowHR,
  allowBothAdminAndHR,
} = require('../middlewares')

router.get(
  '/all/:query_id',
  allowEmployee,
  followupController.getFollowupsForQuery
)

router.post('/', allowEmployee, followupController.createFollowup)

router.patch('/:followup_id', allowEmployee, followupController.updateFollowup)

module.exports = router
