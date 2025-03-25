'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class intereses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      intereses.belongsToMany(models.suscriptores, {
        through: 'suscriptorinteres', // Join table name
        foreignKey: 'intereses_id', // Foreign key in the join table
        otherKey: 'suscriptores_id' // Opposite foreign key in the join table
      });
    }
  }
  intereses.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'intereses',
    timestamps: false
    
  });
  return intereses;
};