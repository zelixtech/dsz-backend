const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'client',
    {
      client_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      client_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      client_mobile: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: 'client_mobile_UNIQUE',
      },
      client_email: {
        type: DataTypes.STRING(320),
        allowNull: false,
        unique: 'client_email_UNIQUE',
      },
      client_address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      client_city: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      client_industry: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      client_blocked: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'client',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'client_id' }],
        },
        {
          name: 'client_id_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'client_id' }],
        },
        {
          name: 'client_email_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'client_email' }],
        },
        {
          name: 'client_mobile_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'client_mobile' }],
        },
      ],
    }
  )
}
