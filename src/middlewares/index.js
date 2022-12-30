const {
  allowEmployee,
  allowAdmin,
  allowHR,
  allowBothAdminAndHR,
} = require('./auth')

module.exports = { allowAdmin, allowBothAdminAndHR, allowEmployee, allowHR }
