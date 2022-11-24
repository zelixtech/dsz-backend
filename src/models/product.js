const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('product', {
    product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quotation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'quotation',
        key: 'quotation_id'
      }
    },
    product_isRecommendation: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    product_selling_rate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "product_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "quotation_id_idx",
        using: "BTREE",
        fields: [
          { name: "quotation_id" },
        ]
      },
    ]
  });
};
