const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'query',
    {
      query_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      query_source: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'client',
          key: 'client_id',
        },
      },
      query_create_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      query_subject: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      query_product: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      query_message: {
        type: DataTypes.STRING(5000),
        allowNull: true,
      },
      query_state: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'employee',
          key: 'employee_id',
        },
      },
    },
    {
      sequelize,
      tableName: 'query',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'query_id' }],
        },
        {
          name: 'query_id_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'query_id' }],
        },
        {
          name: 'client_id_idx',
          using: 'BTREE',
          fields: [{ name: 'client_id' }],
        },
        {
          name: 'employee_id_idx',
          using: 'BTREE',
          fields: [{ name: 'employee_id' }],
        },
      ],
    }
  )
}
