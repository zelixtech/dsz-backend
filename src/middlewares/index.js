const {
  allowEmployee,
  allowAdmin,
  allowHR,
  allowBothAdminAndHR,
  allowLocal
} = require('./auth')

module.exports = { allowAdmin, allowBothAdminAndHR, allowEmployee, allowHR, allowLocal }
