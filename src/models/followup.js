const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('followup', {
    followup_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    query_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'query',
        key: 'query_id'
      }
    },
    followup_text: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'followup',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "followup_id" },
        ]
      },
      {
        name: "followup_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "followup_id" },
        ]
      },
      {
        name: "query_id_idx",
        using: "BTREE",
        fields: [
          { name: "query_id" },
        ]
      },
    ]
  });
};
