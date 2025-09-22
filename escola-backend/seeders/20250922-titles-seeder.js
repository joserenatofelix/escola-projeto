"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Titles", [
      { id: 1, name: "Professor Doutor", createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: "Professor Mestre", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Titles", null, {});
  }
};
