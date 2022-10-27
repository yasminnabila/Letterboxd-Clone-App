const axios = require("axios");
const redis = require("../config/redis");

const APP_URL = "http://localhost:4002/movies";
const USER_URL = "http://localhost:4000/users"

class appController {
  static async readAllMovies(req, res) {
    try {
      const movies = await redis.get("app:movies");
      if (movies) {
        console.log("dari redis");
        const data = JSON.parse(movies);
        res.status(200).json(data);
      } else {
        const { data } = await axios({
          method: "GET",
          url: "http://localhost:4002/movies",
        });
        console.log("dari axios");
        await redis.set("app:movies", JSON.stringify(data));
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createNewMovie(req,res) {
    
  }
}

module.exports = appController;
