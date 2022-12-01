const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('quotation', {
    quotation_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quotation_number: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    query_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'query',
        key: 'query_id'
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
        name: "query_id_idx",
        using: "BTREE",
        fields: [
          { name: "query_id" },
        ]
      },
    ]
  });
};
