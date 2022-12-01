const { db } = require('../startup/db');
const { validateBankInfo } = require('../utils/validate');

const updateEmployeeBankInfo = async (req, res) => {
  try {
    const payload = {
      bank_info_name: req.body.data.bank_info_name,
      bank_info_branch_name: req.body.data.bank_info_branch_name,
      bank_info_ifsc_code: req.body.data.bank_info_ifsc_code,
      employee_name_as_in_bank: req.body.data.employee_name_as_in_bank,
      employee_id: req.body.data.employee_id,
    }

    const { error } = validateBankInfo(payload);
    if (error) {
      // return { validationError: true }
      console.log(error);
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }

    const employee = await db.employee.findOne({
      where: { employee_id: payload.employee_id }
    });
    if (!employee) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Employee do not exists for which bank info is updated",
        error: true,
      })
    }

    const employeeBankInfo = await db.bank_info.findOne({
      where: { employee_id: payload.employee_id }
    })
    if (employeeBankInfo) {
      employeeBankInfo.update({
        bank_info_name: payload.bank_info_name,
        bank_info_branch_name: payload.bank_info_branch_name,
        bank_info_ifsc_code: payload.bank_info_ifsc_code,
        employee_name_as_in_bank: payload.employee_name_as_in_bank,
        employee_id: payload.employee_id,
      })
      return res.json({
        error: false,
        data: employeeBankInfo
      })
    }

    const newEmployeeBankInfo = db.bank_info.build(payload)
    await newEmployeeBankInfo.save();
    console.log(newEmployeeBankInfo)
    return res.json({
      error: false,
      data: newEmployeeBankInfo
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

const retrieveEmployeeBankInfo = async (req, res) => {
  try {
    const employee_id = parseInt(req.params.employee_id);
    if (isNaN(employee_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    let result = await db.bank_info.findOne({
      where: {
        employee_id: employee_id
      }
    });
    if (result === null) {
      console.log("not found");
      // return { NotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Employee Bank Info Do Not Exists",
        error: true,
      })
    }
    else {
      // return { bank_info: result }
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
//   retrieveEmployeeBankInfo({ employee_id: 1 })
// })()



module.exports = { updateEmployeeBankInfo, retrieveEmployeeBankInfo }