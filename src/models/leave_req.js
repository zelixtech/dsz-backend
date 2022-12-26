module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'leave_req',
    {
      leave_req_id: {
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
      leave_req_start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      leave_req_end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      leave_req_message: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      leave_req_status: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'leave_req',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'leave_req_id' }],
        },
        {
          name: 'leave_req_id_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'leave_req_id' }],
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
