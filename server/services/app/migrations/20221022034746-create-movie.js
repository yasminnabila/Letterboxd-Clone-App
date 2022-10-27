"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      slug: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      synopsis: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      trailerUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      GenreId: {
        type: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Genres",
            key: "id",
          },
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Users",
            key: "id",
          },
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Movies");
  },
};
