'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.removeColumn('products', 'quantity');
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'quantity');
  }
};
