const { hashedPassword } = require("../helpers/bcryptjs");
const User = require("../models/user");

class Controller {
  static async readUsers(req, res) {
    try {
      let data = await User.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = Controller;
