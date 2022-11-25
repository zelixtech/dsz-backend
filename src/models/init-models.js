var DataTypes = require("sequelize").DataTypes;
var _attendance = require("./attendance");
var _bank_info = require("./bank_info");
var _client = require("./client");
var _employee = require("./employee");
var _employee_login = require("./employee_login");
var _followups = require("./followups");
var _order = require("./order");
var _product = require("./product");
var _purchase_order = require("./purchase_order");
var _query = require("./query");
var _quotation = require("./quotation");
var _vendor = require("./vendor");

function initModels(sequelize) {
  var attendance = _attendance(sequelize, DataTypes);
  var bank_info = _bank_info(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var employee_login = _employee_login(sequelize, DataTypes);
  var followups = _followups(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var purchase_order = _purchase_order(sequelize, DataTypes);
  var query = _query(sequelize, DataTypes);
  var quotation = _quotation(sequelize, DataTypes);
  var vendor = _vendor(sequelize, DataTypes);

  followups.belongsTo(client, { as: "client", foreignKey: "client_id" });
  client.hasMany(followups, { as: "followups", foreignKey: "client_id" });
  order.belongsTo(client, { as: "client", foreignKey: "client_id" });
  client.hasMany(order, { as: "order", foreignKey: "client_id" });
  query.belongsTo(client, { as: "client", foreignKey: "client_id" });
  client.hasMany(query, { as: "queries", foreignKey: "client_id" });
  quotation.belongsTo(client, { as: "client", foreignKey: "client_id" });
  client.hasMany(quotation, { as: "quotations", foreignKey: "client_id" });
  attendance.belongsTo(employee, { as: "employee", foreignKey: "employee_id" });
  employee.hasMany(attendance, { as: "attendances", foreignKey: "employee_id" });
  bank_info.belongsTo(employee, { as: "employee", foreignKey: "employee_id" });
  employee.hasMany(bank_info, { as: "banks", foreignKey: "employee_id" });
  employee_login.belongsTo(employee, { as: "employee", foreignKey: "employee_id" });
  employee.hasMany(employee_login, { as: "employee_logins", foreignKey: "employee_id" });
  followups.belongsTo(employee, { as: "employee", foreignKey: "employee_id" });
  employee.hasMany(followups, { as: "followups", foreignKey: "employee_id" });
  order.belongsTo(employee, { as: "employee", foreignKey: "employee_id" });
  employee.hasMany(order, { as: "order", foreignKey: "employee_id" });
  query.belongsTo(employee, { as: "employee", foreignKey: "employee_id" });
  employee.hasMany(query, { as: "queries", foreignKey: "employee_id" });
  quotation.belongsTo(employee, { as: "employee", foreignKey: "employee_id" });
  employee.hasMany(quotation, { as: "quotations", foreignKey: "employee_id" });
  followups.belongsTo(order, { as: "order", foreignKey: "order_id" });
  order.hasMany(followups, { as: "followups", foreignKey: "order_id" });
  quotation.belongsTo(order, { as: "order", foreignKey: "order_id" });
  order.hasMany(quotation, { as: "quotations", foreignKey: "order_id" });
  vendor.belongsTo(purchase_order, { as: "purchase_order", foreignKey: "purchase_order_id" });
  purchase_order.hasMany(vendor, { as: "vendors", foreignKey: "purchase_order_id" });
  followups.belongsTo(query, { as: "query", foreignKey: "query_id" });
  query.hasMany(followups, { as: "followups", foreignKey: "query_id" });
  order.belongsTo(query, { as: "query", foreignKey: "query_id" });
  query.hasMany(order, { as: "order", foreignKey: "query_id" });
  quotation.belongsTo(query, { as: "query", foreignKey: "query_id" });
  query.hasMany(quotation, { as: "quotations", foreignKey: "query_id" });
  product.belongsTo(quotation, { as: "quotation", foreignKey: "quotation_id" });
  quotation.hasMany(product, { as: "products", foreignKey: "quotation_id" });

  return {
    attendance,
    bank_info,
    client,
    employee,
    employee_login,
    followups,
    order,
    product,
    purchase_order,
    query,
    quotation,
    vendor,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
