const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  p_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  p_email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  p_password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true