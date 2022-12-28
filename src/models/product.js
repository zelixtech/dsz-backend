module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'product',
    {
      product_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      product_key: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      product_list: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'product',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'product_id' }],
        },
        {
          name: 'product_id_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'product_id' }],
        },
      ],
    }
  )
}
