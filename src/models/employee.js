const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'employee',
    {
      employee_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      employee_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      employee_designation: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      employee_doj: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      employee_mobile: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: 'employee_mobile_UNIQUE',
      },
      employee_office_email: {
        type: DataTypes.STRING(320),
        allowNull: false,
      },
      employee_email: {
        type: DataTypes.STRING(320),
        allowNull: false,
        unique: 'employee_email_UNIQUE',
      },
      employee_dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      employee_address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      employee_relieve_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      employee_department: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      employee_isAdmin: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: false,
      },
      employee_isHR: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: false,
      },
      employee_password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      employee_allow_indiamart: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      tableName: 'employee',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'employee_id' }],
        },
        {
          name: 'employee_mobile_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'employee_mobile' }],
        },
        {
          name: 'employee_email_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'employee_email' }],
        },
        {
          name: 'employee_id_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'employee_id' }],
        },
      ],
    }
  )
}
