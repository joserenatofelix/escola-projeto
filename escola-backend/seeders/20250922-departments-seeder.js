"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Departments", [
      { id: 1, name: "Matemática", createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: "Português", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Departments", null, {});
  }
};
