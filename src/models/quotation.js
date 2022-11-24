const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('quotation', {
    quotation_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quoation_number: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'client',
        key: 'client_id'
      }
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'employee_id'
      }
    },
    query_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'query',
        key: 'query_id'
      }
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'order_id'
      }
    },
    quotation_terms: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    quotation_total_no_of_products: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quotation_total_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quotation_total_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quotation_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    quotation_currency: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "INR"
    }
  }, {
    sequelize,
    tableName: 'quotation',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "quotation_id" },
        ]
      },
      {
        name: "quotation_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "quotation_id" },
        ]
      },
      {
        name: "client_id_idx",
        using: "BTREE",
        fields: [
          { name: "client_id" },
        ]
      },
      {
        name: "query_id_idx",
        using: "BTREE",
        fields: [
          { name: "query_id" },
        ]
      },
      {
        name: "employee_id_idx",
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
      {
        name: "order_id_idx",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
