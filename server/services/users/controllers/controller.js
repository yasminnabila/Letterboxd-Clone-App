const { hashedPassword } = require("../helpers/bcryptjs");
const User = require("../models/user");

class Controller {
  static async readAllUsers(req, res) {
    try {
      let data = await User.findAll();
      res.status(200).json(data);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }

  static async createNewUser(req, res) {
    try {
      let { username, email, password, phoneNumber, address, role } = req.body;
      // console.log(req.body);
      password = hashedPassword(password);
      const dataUser = {
        username,
        email,
        password,
        phoneNumber,
        address,
        role,
      };
      const newUser = await User.create(dataUser);
      res.status(201).json(newUser);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }
}

module.exports = Controller;
