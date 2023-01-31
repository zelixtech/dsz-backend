const { db } = require('../startup/db')
const { Op } = require('sequelize')
const {
  validateEmployee,
  validateDate,
  validateEmpExists,
  validateEmployeeWOP,
} = require('../utils/validate')
const saltRounds = 10
const bcrypt = require('bcrypt')
const { apiLogger } = require('../startup/logger')

const createEmployee = async (req, res) => {
  try {
    if (!req.body.data) {
      throw new Error('ValidationError')
    }
    const payload = {
      employee_name: req.body.data.employee_name,
      employee_designation: req.body.data.employee_designation,
      employee_doj: req.body.data.employee_doj,
      employee_office_email: req.body.data.employee_office_email,
      employee_email: req.body.data.employee_email,
      employee_mobile: req.body.data.employee_mobile,
      employee_dob: req.body.data.employee_dob,
      employee_address: req.body.data.employee_address,
      employee_relieve_date: req.body.data.employee_relieve_date,
      employee_department: req.body.data.employee_department,
      employee_isAdmin: req.body.data.employee_isAdmin || false,
      employee_isHR: req.body.data.employee_isHR || false,
      employee_password: req.body.data.employee_password,
      employee_allow_indiamart: req.body.data.employee_allow_indiamart || true,
    }

    const { error } = validateEmployee(payload)
    if (error) {
      throw new Error('ValidationError')
    }

    const employeeExists = await db.employee.findOne({
      where: {
        [Op.or]: [
          { employee_email: payload.employee_email },
          { employee_mobile: payload.employee_mobile },
        ],
      },
    })
    if (employeeExists) {
      throw new Error('Conflict')
    }

    const hash = bcrypt.hashSync(payload.employee_password, saltRounds)
    payload.employee_password = hash

    const employee = db.employee.build(payload)
    await employee.save()

    return res.status(200).json({
      error: false,
      data: employee,
      message: 'Employee Created',
    })
  } catch (err) {
    apiLogger.error(err)

    if (err.message === 'Conflict') {
      return res.status(409).json({
        errorType: 'Conflict',
        errorMessage: 'Employee Already Exists',
        error: true,
      })
    }

    if (
      err.message === 'ValidationError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    return res.status(500).json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const retrieveEmployee = async (req, res) => {
  try {
    const employee_id = parseInt(req.params.employee_id)

    if (isNaN(employee_id)) {
      throw new Error('ValidationError')
    }

    let employee = await db.employee.findByPk(employee_id)

    if (employee === null) {
      throw new Error('NotFound')
    } else {
      return res.status(200).json({
        error: false,
        data: employee,
      })
    }
  } catch (err) {
    apiLogger.error(err)

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Employee Not Found',
        error: true,
      })
    }

    if (
      err.message === 'ValidationError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    return res.status(500).json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const updateEmployee = async (req, res) => {
  try {
    if (!req.body.data) {
      throw new Error('ValidationError')
    }
    const payload = {
      employee_name: req.body.data.employee_name,
      employee_designation: req.body.data.employee_designation,
      employee_doj: req.body.data.employee_doj,
      employee_office_email: req.body.data.employee_office_email,
      employee_email: req.body.data.employee_email,
      employee_mobile: req.body.data.employee_mobile,
      employee_dob: req.body.data.employee_dob,
      employee_address: req.body.data.employee_address,
      employee_relieve_date: req.body.data.employee_relieve_date,
      employee_department: req.body.data.employee_department,
      employee_isAdmin: req.body.data.employee_isAdmin || false,
      employee_isHR: req.body.data.employee_isHR || false,
      employee_password: req.body.data.employee_password,
      employee_allow_indiamart: req.body.data.employee_allow_indiamart || true,
    }

    if (payload.employee_password === undefined) {
      delete payload['employee_password']
    }

    const { error } = validateEmployeeWOP(payload)
    const employee_id = parseInt(req.params.employee_id)

    if (error || isNaN(employee_id)) {
      throw new Error('ValidationError')
    }

    let employee = await db.employee.findByPk(employee_id)

    if (employee === null) {
      throw new Error('NotFound')
    } else {
      if (payload.employee_password !== undefined) {
        const hash = bcrypt.hashSync(payload.employee_password, saltRounds)
        payload.employee_password = hash
      }

      await employee.update(payload)

      return res.status(200).json({
        error: false,
        data: employee,
      })
    }
  } catch (err) {
    apiLogger.error(err)

    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Unique Field Required',
        error: true,
      })
    }

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Employee Not Found',
        error: true,
      })
    }

    if (
      err.message === 'ValidationError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    return res.status(500).json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const deleteEmployee = async (req, res) => {
  try {
    if (!req.body.data) {
      throw new Error('ValidationError')
    }
    const employee_id = parseInt(req.params.employee_id)
    const payload = {
      employee_relieve_date: req.body.data.employee_relieve_date,
    }

    const { error } = validateDate(payload.employee_relieve_date)

    if (isNaN(employee_id) || error) {
      throw new Error('ValidationError')
    }

    let result = await db.employee.findByPk(employee_id)
    if (result === null) {
      throw new Error('NotFound')
    } else {
      await result.update({
        employee_relieve_date: payload.employee_relieve_date,
      })

      return res.status(200).json({
        error: false,
        data: result,
      })
    }
  } catch (err) {
    apiLogger.error(err)

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Employee Not Found',
        error: true,
      })
    }

    if (
      err.message === 'ValidationError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    return res.status(500).json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const retrieveAllEmployees = async (req, res) => {
  try {
    let employees = await db.employee.findAll()
    return res.status(200).json({
      error: false,
      data: employees,
    })
  } catch (err) {
    apiLogger.error(err)

    return res.status(500).json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const checkEmpExists = async (req, res) => {
  try {
    let payload = {
      employee_email: req.query.employee_email,
      employee_mobile: req.query.employee_mobile,
    }

    if (payload.employee_email === undefined) {
      delete payload['employee_email']
    }
    if (payload.employee_mobile === undefined) {
      delete payload['employee_mobile']
    }

    const { error } = validateEmpExists(payload)
    if (error) {
      throw new Error('ValidationError')
    }

    const employeeExists = await db.employee.findOne({
      where: payload,
    })

    if (employeeExists) {
      throw new Error('Conflict')
    }

    return res.status(200).json({
      error: false,
      message: 'Employee does not Exists',
    })
  } catch (err) {
    apiLogger.error(err)

    if (err.message === 'Conflict') {
      return res.status(409).json({
        errorType: 'Conflict',
        errorMessage: 'Employee Already Exists',
        error: true,
      })
    }

    if (
      err.message === 'ValidationError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    return res.status(500).json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

module.exports = {
  createEmployee,
  retrieveEmployee,
  updateEmployee,
  deleteEmployee,
  retrieveAllEmployees,
  checkEmpExists,
}
