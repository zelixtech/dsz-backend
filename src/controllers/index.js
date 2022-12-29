const employeeController = require('./employee')
const clientController = require('./client')
const loginController = require('./login')
const bankInfoController = require('./bank_info')
const queryController = require('./query')
const quotationController = require('./quotation')
const followupController = require('./followup')
const productController = require('./product')

module.exports = {
  employeeController,
  loginController,
  clientController,
  bankInfoController,
  queryController,
  quotationController,
  followupController,
  productController,
}
