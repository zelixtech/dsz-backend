require('dotenv').config()
const express = require('express')
const router = express.Router()
const {
  allowEmployee,
  allowAdmin,
  allowHR,
  allowBothAdminAndHR,
} = require('../middlewares')

const { employeeController, bankInfoController } = require('../controllers/')

router.get('/all', allowBothAdminAndHR, employeeController.retrieveAllEmployees)

router.get('/check', allowBothAdminAndHR, employeeController.checkEmpExists)

router.get(
  '/:employee_id',
  allowBothAdminAndHR,
  employeeController.retrieveEmployee
)

router.post('/', allowBothAdminAndHR, employeeController.createEmployee)

router.patch(
  '/:employee_id',
  allowBothAdminAndHR,
  employeeController.updateEmployee
)

router.delete(
  '/:employee_id',
  allowBothAdminAndHR,
  employeeController.deleteEmployee
)

router.put(
  '/bankinfo',
  allowBothAdminAndHR,
  bankInfoController.updateEmployeeBankInfo
)

router.get(
  '/bankinfo/:employee_id',
  allowBothAdminAndHR,
  bankInfoController.retrieveEmployeeBankInfo
)

module.exports = router
