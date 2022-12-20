const { db } = require('../startup/db')
const { Op } = require('sequelize')
const {
  validateEmployee,
  validateDate,
  validateEmpExists,
} = require('../utils/validate')
const saltRounds = 10
const bcrypt = require('bcrypt')

const createEmployee = async (req, res) => {
  try {
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
    }
    const { value, error } = validateEmployee(payload)
    if (error) {
      // return { validationError: true }
      console.log(error)
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    var employeeExists = await db.employee.findOne({
      where: {
        [Op.or]: [
          { employee_email: payload.employee_email },
          { employee_mobile: payload.employee_mobile },
        ],
      },
    })
    if (employeeExists) {
      // return { userAlreadyExists: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Employee Already Exists',
        error: true,
      })
    }
    const hash = bcrypt.hashSync(payload.employee_password, saltRounds)
    payload.employee_password = hash
    const newEmployee = db.employee.build(payload)
    await newEmployee.save()
    console.log(newEmployee)
    // return { newEmployee };
    return res.json({
      error: false,
      data: newEmployee,
    })
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
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
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    let result = await db.employee.findByPk(employee_id)
    if (result === null) {
      console.log('not found')
      // return { employeeNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Employee Do Not Exists',
        error: true,
      })
    } else {
      // return { employee: result }
      return res.json({
        error: false,
        data: result,
      })
    }
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const updateEmployee = async (req, res) => {
  try {
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
    }
    const { value, error } = validateEmployee(payload)

    const employee_id = parseInt(req.params.employee_id)
    if (error || isNaN(employee_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    let result = await db.employee.findByPk(employee_id)
    if (result === null) {
      console.log('not found')
      // return { employeeNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Employee Do Not Exists',
        error: true,
      })
    } else {
      await result.update({
        employee_name: payload.employee_name,
        employee_designation: payload.employee_designation,
        employee_doj: payload.employee_doj,
        employee_office_email: payload.employee_office_email,
        employee_email: payload.employee_email,
        employee_mobile: payload.employee_mobile,
        employee_dob: payload.employee_dob,
        employee_address: payload.employee_address,
        employee_relieve_date: payload.employee_relieve_date,
        employee_department: payload.employee_department,
      })
      //   if (result.employee_email == payload.employee_email)
      //     return res.json({
      //       error: false,
      //       data: result
      //     })
      res.json({
        message: 'hello',
        result,
      })
    }
  } catch (err) {
    console.log(err)
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Unique Field Required',
        error: true,
      })
    } else {
      return res.json({
        errorType: 'Server Error',
        errorMessage: 'Internal Server Error',
        error: true,
      })
    }
    // return { dbError: true };
  }
}

const deleteEmployee = async (req, res) => {
  try {
    const employee_id = parseInt(req.params.employee_id)
    const payload = {
      employee_relieve_date: req.body.data.employee_relieve_date,
    }
    const { error } = validateDate(payload.employee_relieve_date)

    if (isNaN(employee_id) || error) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    let result = await db.employee.findByPk(employee_id)
    if (result === null) {
      console.log('not found')
      // return { employeeNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Employee Do Not Exists',
        error: true,
      })
    } else {
      // return { employee: result }
      result.update({
        employee_relieve_date: payload.employee_relieve_date,
      })
      return res.json({
        error: false,
        data: result,
      })
    }
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const retrieveAllEmployees = async (req, res) => {
  try {
    let result = await db.employee.findAll()
    return res.json({
      error: false,
      data: result,
    })
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
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
      // return { validationError: true }
      console.log(error)
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    var employeeExists = await db.employee.findOne({
      where: payload,
    })
    if (employeeExists) {
      // return { userAlreadyExists: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Employee Already Exists',
        error: true,
      })
    }
    return res.json({
      error: false,
      message: 'Employee does not Exists',
    })
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

// (async () => {
//   retrieveEmployee({ employee_id: 1 })
// })()

module.exports = {
  createEmployee,
  retrieveEmployee,
  updateEmployee,
  deleteEmployee,
  retrieveAllEmployees,
  checkEmpExists,
}
