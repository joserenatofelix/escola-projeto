"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Professors", [
      { id: 1, name: "Girafales", department_id: 1, title_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: "Chapatin", department_id: 1, title_id: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Professors", null, {});
  }
};
