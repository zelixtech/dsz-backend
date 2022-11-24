const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('bank', {
    bank_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'employee_id'
      }
    },
    bank_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bank_ifsc_code: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    bank_branch_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    employee_name_as_in_bank: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bank',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bank_id" },
        ]
      },
      {
        name: "bank_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bank_id" },
        ]
      },
      {
        name: "employee_id_idx",
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
    ]
  });
};
