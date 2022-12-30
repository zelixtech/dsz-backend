const express = require('express')
const router = express.Router()
const {
  allowEmployee,
  allowAdmin,
  allowHR,
  allowBothAdminAndHR,
} = require('../middlewares')
const { loginController } = require('../controllers/')

router.post('/', loginController.login)

router.get(
  '/attendance/allEmployees',
  allowBothAdminAndHR,
  loginController.getAttendanceOfEachEmployee
)

router.get(
  '/attendance/:employee_id',
  allowBothAdminAndHR,
  loginController.getAttendanceOfAEmployee
)

router.put(
  '/attendance/:employee_id',
  allowBothAdminAndHR,
  loginController.updateAttendanceOfAEmployee
)

router.post(
  '/attendance/leave',
  allowEmployee,
  loginController.leaveNotificationToHR
)

router.get(
  '/attendance/all/leaves',
  allowBothAdminAndHR,
  loginController.getAllLeaveNotifications
)

router.get(
  '/attendance/all/archived_leaves',
  allowBothAdminAndHR,
  loginController.getAllArchivedLeaveNotifications
)

router.patch(
  '/attendance/leave/:leave_req_id',
  allowBothAdminAndHR,
  loginController.updateLeaveReqStatus
)

router.delete(
  '/attendance/leave/:leave_req_id',
  allowBothAdminAndHR,
  loginController.deleteLeaveReq
)

module.exports = router
