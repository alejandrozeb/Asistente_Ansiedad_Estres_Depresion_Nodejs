'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Usuario.hasMany(Test);
      Test.belongsTo(models.Usuario);

    }
  };
  Test.init({
    t_respuestas: DataTypes.STRING,
    t_preguntas: DataTypes.STRING,
    t_fecha: DataTypes.DATE,
    t_estresPuntos: DataTypes.INTEGER,
    t_depresionPuntos: DataTypes.INTEGER,
    t_ansiedad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};