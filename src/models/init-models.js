var DataTypes = require('sequelize').DataTypes
var _attendance = require('./attendance')
var _bank_info = require('./bank_info')
var _client = require('./client')
var _employee = require('./employee')
var _employee_login = require('./employee_login')
var _followup = require('./followup')
var _product = require('./product')
var _purchase_order = require('./purchase_order')
var _query = require('./query')
var _quotation = require('./quotation')
var _vendor = require('./vendor')
var _leave_req = require('./leave_req')

function initModels(sequelize) {
  var attendance = _attendance(sequelize, DataTypes)
  var bank_info = _bank_info(sequelize, DataTypes)
  var client = _client(sequelize, DataTypes)
  var employee = _employee(sequelize, DataTypes)
  var employee_login = _employee_login(sequelize, DataTypes)
  var followup = _followup(sequelize, DataTypes)
  var product = _product(sequelize, DataTypes)
  var purchase_order = _purchase_order(sequelize, DataTypes)
  var query = _query(sequelize, DataTypes)
  var quotation = _quotation(sequelize, DataTypes)
  var vendor = _vendor(sequelize, DataTypes)
  var leave_req = _leave_req(sequelize, DataTypes)

  leave_req.belongsTo(employee, { as: 'employee', foreignKey: 'employee_id' })
  employee.hasMany(leave_req, { as: 'leaves', foreignKey: 'employee_id' })
  query.belongsTo(client, { as: 'client', foreignKey: 'client_id' })
  client.hasMany(query, { as: 'queries', foreignKey: 'client_id' })
  attendance.belongsTo(employee, { as: 'employee', foreignKey: 'employee_id' })
  employee.hasMany(attendance, { as: 'attendances', foreignKey: 'employee_id' })
  bank_info.belongsTo(employee, { as: 'employee', foreignKey: 'employee_id' })
  employee.hasMany(bank_info, { as: 'banks', foreignKey: 'employee_id' })
  employee_login.belongsTo(employee, {
    as: 'employee',
    foreignKey: 'employee_id',
  })
  employee.hasMany(employee_login, {
    as: 'employee_logins',
    foreignKey: 'employee_id',
  })
  query.belongsTo(employee, { as: 'employee', foreignKey: 'employee_id' })
  employee.hasMany(query, { as: 'queries', foreignKey: 'employee_id' })
  vendor.belongsTo(purchase_order, {
    as: 'purchase_order',
    foreignKey: 'purchase_order_id',
  })
  purchase_order.hasMany(vendor, {
    as: 'vendors',
    foreignKey: 'purchase_order_id',
  })
  followup.belongsTo(query, { as: 'query', foreignKey: 'query_id' })
  query.hasMany(followup, { as: 'followups', foreignKey: 'query_id' })
  quotation.belongsTo(query, { as: 'query', foreignKey: 'query_id' })
  query.hasMany(quotation, { as: 'quotations', foreignKey: 'query_id' })
  product.belongsTo(quotation, { as: 'quotation', foreignKey: 'quotation_id' })
  quotation.hasMany(product, { as: 'products', foreignKey: 'quotation_id' })

  return {
    attendance,
    bank_info,
    client,
    employee,
    employee_login,
    followup,
    product,
    purchase_order,
    query,
    quotation,
    vendor,
    leave_req,
  }
}
module.exports = initModels
module.exports.initModels = initModels
module.exports.default = initModels
