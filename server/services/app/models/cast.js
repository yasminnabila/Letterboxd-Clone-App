"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cast.belongsTo(models.Movie, {
        foreignKey: "MovieId",
      });
    }
  }
  Cast.init(
    {
      MovieId: DataTypes.INTEGER,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name cannot be empty",
          },
        },
      },
      profilePict: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Cast profile picture is required",
          },
          notEmpty: {
            msg: "Cast profile picture cannot be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Cast",
    }
  );
  return Cast;
};
