"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Classes", [
      { id: 1, code: "A1", subject_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, code: "B1", subject_id: 2, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Classes", null, {});
  }
};
