"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let dataGenres = require("../data/genres.json");
    dataGenres.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Genres", dataGenres, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Genres", null, {});
  },
};
