const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'employee_login',
    {
      employee_login_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'employee',
          key: 'employee_id',
        },
      },
      employee_login_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      employee_login_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'employee_login',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'employee_login_id' }],
        },
        {
          name: 'employee_login_id_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'employee_login_id' }],
        },
        {
          name: 'employee_id_6_idx',
          using: 'BTREE',
          fields: [{ name: 'employee_id' }],
        },
      ],
    }
  )
}
