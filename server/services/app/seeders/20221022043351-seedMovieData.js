"use strict";
const formatSlug = require("../helpers/slug");

module.exports = {
  async up(queryInterface, Sequelize) {
    let dataMovies = require("../data/movies.json");
    dataMovies.forEach((el) => {
      el.slug = formatSlug(el.title);
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Movies", dataMovies, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
