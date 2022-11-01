const { hashedPassword } = require("../helpers/bcryptjs");
const User = require("../models/user");

class Controller {
  static async readAllUsers(req, res, next) {
    try {
      let data = await User.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async readUserById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await User.findById(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createNewUser(req, res, next) {
    try {
      let { username, email, password, phoneNumber, address, role } = req.body;
      // console.log(req.body);
      password = hashedPassword(password);
      const data = {
        username,
        email,
        password,
        phoneNumber,
        address,
        role: "Admin",
      };
      const newUser = await User.create(data);
      res.status(201).json({
        statusCode: 201,
        message: "User has been created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteUserById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await User.destroy(id);
      res.status(200).json({
        statusCode: 200,
        message: "User has been deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
