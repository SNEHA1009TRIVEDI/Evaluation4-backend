'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('entities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      field_id: {
        type: Sequelize.INTEGER
      },
      field_value: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      collection_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Collections',
          key: 'id'
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('entities');
  }
};