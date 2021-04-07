'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      t_respuestas: {
        type: Sequelize.STRING
      },
      t_preguntas: {
        type: Sequelize.STRING
      },
      t_fecha: {
        type: Sequelize.DATE
      },
      t_estresPuntos: {
        type: Sequelize.INTEGER
      },
      t_depresionPuntos: {
        type: Sequelize.INTEGER
      },
      t_ansiedad: {
        type: Sequelize.INTEGER
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
        type: Sequelize.
        DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tests');
  }
};