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
        allowNull: true,
      },
      client_mobile: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: 'client_mobile_UNIQUE',
      },
      client_email: {
        type: DataTypes.STRING(320),
        allowNull: true,
      },
      client_billing_address: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      client_shipping_address: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      client_gst_no: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      client_city: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      client_state: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      client_country_iso: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      client_company_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      client_blocked: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
      },
      client_alternate_mobile: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      client_alternate_email: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      client_isNew: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: 'new',
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
          name: 'client_mobile_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'client_mobile' }],
        },
      ],
    }
  )
}
