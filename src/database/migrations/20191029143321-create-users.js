'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { 
      name: {
          type: Sequelize.STRING,
          allowNull: false
        },
      id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },
      email: { 
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
          validate: {
            isEmail: true,
          }
        },
      password_hash:{
          type: Sequelize.STRING,
        },
      created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
