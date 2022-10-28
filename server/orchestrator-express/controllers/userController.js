const axios = require("axios");
const redis = require("../config/redis");

const USER_URL = "http://localhost:4001/users";

class userController {
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
}

module.exports = userController;
