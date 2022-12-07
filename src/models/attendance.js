const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('attendance', {
    attendance_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'employee_id'
      }
    },
    // attendance_time: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    // },
    date_of_attendance: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    attendance_status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "FULL"
    }
  }, {
    sequelize,
    tableName: 'attendance',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attendance_id" },
        ]
      },
      {
        name: "attendance_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attendance_id" },
        ]
      },
      {
        name: "employee_id_6_idx",
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
    ]
  });
};
