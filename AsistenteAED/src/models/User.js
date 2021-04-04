const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define(
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

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
