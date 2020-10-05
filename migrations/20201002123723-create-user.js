'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name',
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      birthday: {
        type: Sequelize.DATEONLY,
      },
      isMale: {
        type: Sequelize.BOOLEAN,
        field: 'is_male',
      },
      passwordHash: {
        allowNull: false,
        type: Sequelize.TEXT,
        field: 'password_hash',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
