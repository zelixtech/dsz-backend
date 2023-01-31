const { db } = require('../startup/db')
const { validateBankInfo } = require('../utils/validate')

const updateEmployeeBankInfo = async (req, res) => {
  try {
    if (!req.body.data) {
      throw new Error('ValidationError')
    }
    const payload = {
      bank_info_name: req.body.data.bank_info_name,
      bank_info_branch_name: req.body.data.bank_info_branch_name,
      bank_info_ifsc_code: req.body.data.bank_info_ifsc_code,
      employee_name_as_in_bank: req.body.data.employee_name_as_in_bank,
      employee_id: req.body.data.employee_id,
      bank_account_no: req.body.data.bank_account_no,
    }

    const { error } = validateBankInfo(payload)
    if (error) {
      throw new Error('ValidationError')
    }

    const employeeBankInfo = await db.bank_info.findOne({
      where: { employee_id: payload.employee_id },
    })

    if (employeeBankInfo) {
      employeeBankInfo.update({
        bank_info_name: payload.bank_info_name,
        bank_info_branch_name: payload.bank_info_branch_name,
        bank_info_ifsc_code: payload.bank_info_ifsc_code,
        employee_name_as_in_bank: payload.employee_name_as_in_bank,
        employee_id: payload.employee_id,
        bank_account_no: payload.bank_account_no,
      })

      return res.status(200).json({
        error: false,
        data: employeeBankInfo,
      })
    }

    const newEmployeeBankInfo = db.bank_info.build(payload)
    await newEmployeeBankInfo.save()

    return res.status(201).json({
      error: false,
      data: newEmployeeBankInfo,
    })
  } catch (err) {
    console.log(err)

    if (err.name === 'SequelizeForeignKeyConstraintError') {
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

const retrieveEmployeeBankInfo = async (req, res) => {
  try {
    if (!req.params.employee_id) {
      throw new Error('ValidationError')
    }
    const employee_id = parseInt(req.params.employee_id)
    if (isNaN(employee_id)) {
      throw new Error('ValidationError')
    }

    let result = await db.bank_info.findOne({
      where: {
        employee_id: employee_id,
      },
    })

    if (result === null) {
      throw new Error('NotFound')
    } else {
      return res.status(200).json({
        error: false,
        data: result,
      })
    }
  } catch (err) {
    console.log(err)
    if (err.message === 'ValidationError') {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Employee Bank Info Not Found',
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

module.exports = { updateEmployeeBankInfo, retrieveEmployeeBankInfo }
