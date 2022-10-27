"use strict";
const { Model } = require("sequelize");
const { hashedPassword } = require("../helpers/bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User.hasMany(models.Movie, {
      //   foreignKey: "UserId",
      // });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "E-mail is required",
          },
          notEmpty: {
            msg: "E-mail cannot be empty",
          },
          isEmail: {
            msg: "Input must be in e-mail format",
          },
        },
        unique: {
          msg: "E-mail has already been registered",
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Password is required",
          },
          notEmpty: {
            msg: "Password cannot be empty",
          },
          len: {
            args: [5],
            msg: "Password must be at least 5 characters",
          },
        },
      },
      role: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user) => {
    user.password = hashedPassword(user.password);
    if (!user.role) {
      user.role = "Admin";
    }
  });
  return User;
};
