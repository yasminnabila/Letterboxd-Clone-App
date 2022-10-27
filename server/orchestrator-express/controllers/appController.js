const axios = require("axios");
const redis = require("../config/redis");

const APP_URL = "http://localhost:4002/movies";
// const USER_URL = "http://localhost:4000/users";

class appController {
  static async readAllMovies(req, res, next) {
    try {
      console.log("masuk appcontroller");
      const moviesCache = await redis.get("app:movies");
      if (moviesCache) {
        console.log("dari redis");
        const data = JSON.parse(moviesCache);
        res.status(200).json(data);
      } else {
        const { data } = await axios({
          method: "GET",
          url: `${APP_URL}`,
        });

        console.log("dari axios");
        await redis.set("app:movies", JSON.stringify(data));
        res.status(200).json(data);
      }
    } catch (error) {
      console.log(error);
      // next(error);
    }
  }

  static async createNewMovie(req, res) {}
}

module.exports = appController;
