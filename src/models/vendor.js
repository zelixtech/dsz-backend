const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'vendor',
    {
      vendor_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      purchase_order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'purchase_order',
          key: 'purchase_order_id',
        },
      },
      vendor_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      vendor_rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vendor_product_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'vendor',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'vendor_id' }],
        },
        {
          name: 'vendor_id_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'vendor_id' }],
        },
        {
          name: 'purchase_order_id_idx',
          using: 'BTREE',
          fields: [{ name: 'purchase_order_id' }],
        },
      ],
    }
  )
}
