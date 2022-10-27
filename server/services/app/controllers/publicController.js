const { User, Movie, Cast, Genre } = require("../models");

class publicController {
  static async readAllMovies(req, res, next) {
    try {
      const data = await Movie.findAll({
        include: [Genre],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async readOneMovieBySlug(req, res, next) {
    try {
      const { slug } = req.query;
      const data = await Movie.findOne({
        where: {
          slug,
        },
        include: [Genre, Cast],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async readOneMovieById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Movie.findOne({
        where: {
          id,
        },
        include: [Genre, Cast],
      });
      if (!data) {
        throw {
          code: 404,
          msg: "Movie not found",
        };
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = publicController;
