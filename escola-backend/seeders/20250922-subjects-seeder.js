"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Subjects", [
      { id: 1, name: "Matemática Básica", taught_by: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: "Gramática", taught_by: 2, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Subjects", null, {});
  }
};
