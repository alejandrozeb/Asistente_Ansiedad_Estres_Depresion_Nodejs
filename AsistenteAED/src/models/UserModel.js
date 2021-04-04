const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const UserModel = sequelize.define(
  "User",
  {
    u_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    u_nombreUsuairo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    u_telefono: {
      type: DataTypes.STRING,
    },
    u_genero: {
      type: DataTypes.STRING,
    },
    u_fechaNacimiento: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);

module.exports = UserModel;
