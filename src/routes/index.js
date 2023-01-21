const employee = require('./employee')
const client = require('./client')
const query = require('./query')
const auth = require('./auth')
const followup = require('./followup')
const quotation = require('./quotation')
const product = require('./product')
const admin = require('./admin')
const invoice = require('./invoice')

module.exports = {
  query,
  client,
  employee,
  auth,
  followup,
  quotation,
  admin,
  product,
  invoice,
}
