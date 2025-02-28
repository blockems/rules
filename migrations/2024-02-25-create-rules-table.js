'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rule_set_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      match_condition: {
        type: Sequelize.JSON, // Make sure your DB supports JSON
        allowNull: false,
      },
      return: {
        type: Sequelize.JSON, // Make sure your DB supports JSON
        allowNull: false,
      },
      order_no: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Rules');
  }
};