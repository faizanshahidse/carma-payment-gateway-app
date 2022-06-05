'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('card_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cardNo: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      cvv: {
        allowNull: false,
        type: Sequelize.INTEGER(3),
      },
      cardHolderName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      expiryDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('card_details');
  },
};
