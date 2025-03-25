'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuscriptorInteres extends Model {

    static associate(models) {
    }
  }
  SuscriptorInteres.init({
    intereses_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'intereses', // Nombre de la tabla de intereses
        key: 'id'
      }
    },
    suscriptores_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'suscriptores', // Nombre de la tabla de suscriptores
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'suscriptorinteres',
    tableName: 'suscriptorinteres', // Nombre de la tabla en la base de datos
    timestamps: false // Si no necesitas columnas de timestamps
  });
  return SuscriptorInteres;
};