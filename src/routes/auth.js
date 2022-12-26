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

router.post('/attendance/leave', loginController.leaveNotificationToHR)
router.get('/attendance/all/leaves', loginController.getAllLeaveNotifications)
router.get(
  '/attendance/all/archived_leaves',
  loginController.getAllArchivedLeaveNotifications
)
router.patch(
  '/attendance/leave/:leave_req_id',
  loginController.updateLeaveReqStatus
)
router.delete('/attendance/leave/:leave_req_id', loginController.deleteLeaveReq)

module.exports = router
