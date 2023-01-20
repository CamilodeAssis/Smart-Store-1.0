"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "status", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "active"
    });
    await queryInterface.addColumn("users", "type", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "user"
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "status");
    await queryInterface.removeColumn("users", "type");
  },
};
