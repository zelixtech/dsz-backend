const { db } = require('../startup/db');
const { Op } = require('sequelize')
const Joi = require('joi').extend(require('@joi/date'));

const validateEmployee = (employee) => {
  const employeeSchema = Joi.object({
    employee_name: Joi.string().min(3).max(255).required(),
    employee_designation: Joi.string().min(3).max(255).required(),
    employee_doj: Joi.date().format('YYYY-MM-DD').required(),
    employee_mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    employee_office_email: Joi.string().email().min(3).max(320).required(),
    employee_email: Joi.string().email().min(3).max(320).required(),
    employee_dob: Joi.date().format('YYYY-MM-DD').required(),
    employee_address: Joi.string().min(3).max(255).required(),
    employee_relieve_date: Joi.date().format('YYYY-MM-DD'),
    employee_department: Joi.string().min(1).max(255).required(),
    employee_isAdmin: Joi.boolean(),
  })

  return employeeSchema.validate(employee)
}

const createEmployee = async (req, res) => {
  try {
    const data = req.body;
    const { error } = validateEmployee(data.employee);
    if (error) {
      // return { validationError: true }
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    var employeeExists = await db.employee.findOne({
      where: {
        [Op.or]: [
          { employee_email: data.employee.employee_email },
          { employee_mobile: data.employee.employee_mobile },
          { employee_office_email: data.employee.employee_office_email },
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

    const newEmployee = db.employee.build(data.employee)
    await newEmployee.save();
    console.log(newEmployee)
    return { newEmployee };
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