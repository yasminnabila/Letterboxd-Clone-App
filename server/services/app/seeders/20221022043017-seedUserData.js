"use strict";
const { hashedPassword } = require("../helpers/bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    let dataUsers = require("../data/users.json");
    dataUsers.forEach((el) => {
      el.password = hashedPassword(el.password);
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Users", dataUsers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
