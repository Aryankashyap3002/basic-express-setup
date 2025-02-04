'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports', {  // Change from 'Airport' to 'Airports'
      type: 'FOREIGN KEY',
      name: 'city_fkey_constraint',
      fields: ['cityId'],
      references: {
        table: 'Cities',  // Ensure this matches the actual City table name
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports', 'city_fkey_constraint');
  }
};
