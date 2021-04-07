'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contactos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      c_email: {
        type: Sequelize.STRING
      },
      c_nombre: {
        type: Sequelize.STRING
      },
      c_telefono: {
        type: Sequelize.INTEGER(50)
      },
      fk_idUsuario: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'usuarios',
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
    await queryInterface.dropTable('contactos');
  }
};
