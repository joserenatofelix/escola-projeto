"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("ClassSchedules", [
      { id: 1, class_id: 1, room_id: 1, day_of_week: 'SEGUNDA', start_time: '09:00', end_time: '11:00', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, class_id: 2, room_id: 2, day_of_week: 'TERÇA', start_time: '10:00', end_time: '12:00', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ClassSchedules", null, {});
  }
};
