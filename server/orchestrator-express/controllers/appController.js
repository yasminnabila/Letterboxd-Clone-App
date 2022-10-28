const axios = require("axios");
const redis = require("../config/redis");

const APP_URL = "http://localhost:4002/movies";
const USER_URL = "http://localhost:4001/users";

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
          url: APP_URL,
        });

        console.log("dari axios");
        await redis.set("app:movies", JSON.stringify(data));
        res.status(200).json(data);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async createNewMovie(req, res, next) {
    try {
      const {
        title,
        synopsis,
        trailerUrl,
        imageUrl,
        rating,
        GenreId,
        name1,
        name2,
        name3,
        profilePict1,
        profilePict2,
        profilePict3,
        userMongoId,
      } = req.body;

      let { data } = await axios({
        method: "POST",
        url: APP_URL,
        data: {
          title,
          synopsis,
          trailerUrl,
          imageUrl,
          rating,
          GenreId,
          name1,
          name2,
          name3,
          profilePict1,
          profilePict2,
          profilePict3,
          userMongoId,
        },
      });

      redis.del("app:movies");
      res.status(201).json(data);
    } catch (error) {
      console.log(error, "<<<<<");
      next(error);
    }
  }

  static async readOneMovieById(req, res, next) {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${APP_URL}/${req.params.id}`,
      });

      const { data: user } = await axios({
        method: `GET`,
        url: `${USER_URL}/${data.userMongoId}`,
      });
      data.user = user;

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = appController;
