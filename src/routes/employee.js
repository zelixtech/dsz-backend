require('dotenv').config()
const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee');

router.get('/:employee_id', employeeController.retrieveEmployee)
router.post('/', employeeController.createEmployee)
// router.get('/all', employeeController.retrieveAllEmployees)

module.exports = router
