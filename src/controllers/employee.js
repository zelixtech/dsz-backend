const { db } = require('../startup/db');
const { Op } = require('sequelize')
const validateEmployee = require('../utils/schema');

const createEmployee = async (req, res) => {
  try {
    const payload = {
      employee_name: req.body.employee.employee_name,
      employee_designation: req.body.employee.employee_designation,
      employee_doj: req.body.employee.employee_doj,
      employee_office_email: req.body.employee.employee_office_email,
      employee_email: req.body.employee.employee_email,
      employee_mobile: req.body.employee.employee_mobile,
      employee_dob: req.body.employee.employee_dob,
      employee_address: req.body.employee.employee_address,
      employee_relieve_date: req.body.employee.employee_relieve_date,
      employee_department: req.body.employee.employee_department,
      employee_isAdmin: req.body.employee.employee_isAdmin || false,
    }
    const { value, error } = validateEmployee(payload);
    if (error) {
      // return { validationError: true }
      console.log(error);
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    var employeeExists = await db.employee.findOne({
      where: {
        [Op.or]: [
          { employee_email: payload.employee_email },
          { employee_mobile: payload.employee_mobile },
          { employee_office_email: payload.employee_office_email },
        ]
      }
    })
    if (employeeExists) {
      // return { userAlreadyExists: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Employee Aldready Exists",
        error: true,
      })
    }

    const newEmployee = db.employee.build(payload)
    await newEmployee.save();
    console.log(newEmployee)
    // return { newEmployee };
    return res.json({
      error: false,
      data: newEmployee
    })
  }
  catch (err) {
    console.log(err);
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: "Internal Server Error",
      error: true,
    })
  }
}

const retrieveEmployee = async (req, res) => {
  try {
    const employee_id = parseInt(req.params.employee_id);
    if (isNaN(employee_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    let result = await db.employee.findByPk(employee_id);
    if (result === null) {
      console.log("not found");
      // return { employeeNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Employee Do Not Exists",
        error: true,
      })
    }
    else {
      // return { employee: result }
      return res.json({
        error: false,
        data: result
      })
    }
  }
  catch (err) {
    console.log(err);
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: "Internal Server Error",
      error: true,
    })
  }
}

// (async () => {
//   retrieveEmployee({ employee_id: 1 })
// })()



module.exports = { createEmployee, retrieveEmployee }