const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'purchase_order',
    {
      purchase_order_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      product_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      purchased_from_vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      invoice_number: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      payment_status: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'purchase_order',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'purchase_order_id' }],
        },
        {
          name: 'purchase_order_id_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'purchase_order_id' }],
        },
      ],
    }
  )
}
