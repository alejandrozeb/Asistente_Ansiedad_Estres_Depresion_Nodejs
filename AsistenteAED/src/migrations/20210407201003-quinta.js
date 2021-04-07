'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('Doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      u_telefono: {
        type: Sequelize.INTEGER
      },
      u_genero: {
        type: Sequelize.STRING
      },
      u_nombre: {
        type: Sequelize.STRING
      },
      fk_idPersona: {
        type: Sequelize.INTEGER,
        /* references: {
          model: {
            tableName: 'personas',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false */
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('Doctors');
  }
};
