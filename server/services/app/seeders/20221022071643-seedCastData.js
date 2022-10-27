"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let dataCasts = require("../data/casts.json");
    dataCasts.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Casts", dataCasts, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Casts", null, {});
  },
};
