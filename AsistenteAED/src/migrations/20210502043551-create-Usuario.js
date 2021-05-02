'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      u_telefono: {
        type: Sequelize.INTEGER(50)
      },
      u_genero: {
        type: Sequelize.STRING
      },
      u_nombre: {
        type: Sequelize.STRING
      },
      PersonaId: {
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
    await queryInterface.dropTable('Usuarios');
  }
};
