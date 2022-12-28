module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'quotation',
    {
      quotation_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      quotation_number: {
        type: DataTypes.STRING(4),
        allowNull: false,
      },
      query_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'query',
          key: 'query_id',
        },
      },
      quotation_financial_year: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      quotation_count_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      quotation_data: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'quotation',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'quotation_id' }],
        },
        {
          name: 'quotation_id_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'quotation_id' }],
        },
        {
          name: 'query_id_idx',
          using: 'BTREE',
          fields: [{ name: 'query_id' }],
        },
      ],
    }
  )
}
