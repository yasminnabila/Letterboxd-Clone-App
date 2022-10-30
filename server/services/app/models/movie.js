"use strict";
const { Model } = require("sequelize");
const formatSlug = require("../helpers/slug");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Movie.belongsTo(models.User, {
      //   foreignKey: "UserId",
      // });
      Movie.hasMany(models.Cast, {
        foreignKey: "MovieId",
      });
      Movie.belongsTo(models.Genre, {
        foreignKey: "GenreId",
      });
    }
  }
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title is required",
          },
          notEmpty: {
            msg: "Title cannot be empty",
          },
        },
      },
      slug: DataTypes.STRING,
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Synopsis is required",
          },
          notEmpty: {
            msg: "Synopsis cannot be empty",
          },
        },
      },
      trailerUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Trailer URL is required",
          },
          notEmpty: {
            msg: "Trailer URL is required",
          },
          isUrl: {
            msg: "Invalid URL format",
          },
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Image URL is required",
          },
          notEmpty: {
            msg: "Image URL is required",
          },
          isUrl: {
            msg: "Invalid URL format",
          },
        },
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "Rating is required",
          },
          notEmpty: {
            msg: "Rating is required",
          },
          max: {
            args: 10,
            msg: "Input value between 1 - 10",
          },
          min: {
            args: 1,
            msg: "Input value between 1 - 10",
          },
        },
      },
      GenreId: DataTypes.INTEGER,
      userMongoId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  Movie.beforeCreate((movie) => {
    movie.slug = formatSlug(movie.title);
  });
  Movie.beforeUpdate((movie) => {
    movie.slug = formatSlug(movie.title);
  });
  return Movie;
};
