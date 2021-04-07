'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      d_telefono: {
        type: Sequelize.INTEGER
      },
      d_imagen: {
        type: Sequelize.STRING
      },
      d_nombre: {
        type: Sequelize.STRING
      },
      d_apellido:{
        type: Sequelize.STRING
      },
      fk_idPersona: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'personas',
            key: 'id'
          },
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Doctors');
  }
};
