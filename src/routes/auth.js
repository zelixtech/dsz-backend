const express = require('express')
const router = express.Router()

const { loginController } = require('../controllers/')

router.post('/', loginController.login)

router.get(
  '/attendance/allEmployees',
  loginController.getAttendanceOfEachEmployee
)

router.get('/attendance/:employee_id', loginController.getAttendanceOfAEmployee)

router.put(
  '/attendance/:employee_id',
  loginController.updateAttendanceOfAEmployee
)

module.exports = router
