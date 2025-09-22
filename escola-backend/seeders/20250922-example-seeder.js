"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Examples", [
      {
        name: "Exemplo 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Exemplo 2",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Examples", null, {});
  }
};
