const axios = require("axios");
const redis = require("../config/redis");

const USER_URL = "http://localhost:4001/users";

class usersController {
  static async readAllUsers(req, res, next) {
    try {
      console.log("masuk user controller");
      const usersCache = await redis.get("users");
      if (usersCache) {
        console.log("dari redis");
        const data = JSON.parse(usersCache);
        res.status(200).json(data);
      } else {
        const { data } = await axios({
          method: "GET",
          url: USER_URL,
        });

        await redis.set("users", JSON.stringify(data));
        res.status(200).json(data);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async readUserById(req, res, next) {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${USER_URL}/${req.params.id}`,
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createNewUser(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address, role } =
        req.body;

      const { data } = await axios({
        method: "POST",
        url: USER_URL,
        data: {
          username,
          email,
          password,
          role,
          phoneNumber,
          address,
        },
      });

      redis.del("users");
      res.status(201).json({
        message: "User has been created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteUserById(req, res, next) {
    try {
      await axios({
        method: "DELETE",
        url: `${USER_URL}/${req.params.id}`,
      });
      redis.del("users");
      res.status(200).json({
        message: "User has been deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = usersController;
