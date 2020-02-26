'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Fname: {
        type: Sequelize.STRING
      },
      Lname: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Role: {
        type: Sequelize.BOOLEAN
      },
      Password: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      contact: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('admins')
};