"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Rooms", [
      { id: 1, name: "Sala 101", building_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: "Sala 102", building_id: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Rooms", null, {});
  }
};
