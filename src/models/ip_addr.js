module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ip_addr',
    {
      ip_addr_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      ip_address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'ip_addr',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'ip_addr_id' }],
        },
        {
          name: 'ip_addr_id_idx',
          using: 'BTREE',
          fields: [{ name: 'ip_addr_id' }],
        },
      ],
    }
  )
}
