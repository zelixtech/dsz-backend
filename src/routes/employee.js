require('dotenv').config()
const express = require('express');
const router = express.Router();

const { employeeController, bankInfoController } = require('../controllers/');

router.get('/all', employeeController.retrieveAllEmployees)
router.get('/:employee_id', employeeController.retrieveEmployee)
router.post('/', employeeController.createEmployee)
router.patch('/:employee_id', employeeController.updateEmployee)
router.delete('/:employee_id', employeeController.deleteEmployee)

router.put('/bankinfo', bankInfoController.updateEmployeeBankInfo)
router.get('/bankinfo/:employee_id', bankInfoController.retrieveEmployeeBankInfo)

module.exports = router
