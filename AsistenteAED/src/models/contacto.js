'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contacto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Usuario.hasOne(contacto);
      contacto.belongsTo(modelos.Usuario);
    }
  };
  contacto.init({
    c_email: DataTypes.STRING,
    c_nombre: DataTypes.STRING,
    c_telefono: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'contacto',
  });
  return contacto;
};