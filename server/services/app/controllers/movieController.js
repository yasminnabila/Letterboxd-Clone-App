const { User, Movie, Cast, Genre, sequelize } = require("../models");

class movieController {
  static async readAllMovies(req, res, next) {
    try {
      console.log("masuk sinih");
      const data = await Movie.findAll({
        include: [
          // { model: User, attributes: ["email"] },
          { model: Cast, attributes: ["name", "profilePict"] },
          { model: Genre, attributes: ["name"] },
        ],
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
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

  static async readAllGenres(req, res, next) {
    try {
      const data = await Genre.findAll({});
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async readAllCasts(req, res, next) {
    try {
      const data = await Cast.findAll({});
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async createNewMovie(req, res, next) {
    const t = await sequelize.transaction();
    try {
      // const { id: UserId } = req.user;
      // console.log(req.user, id, "<<<<<<")
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

      const createMovie = await Movie.create(
        {
          title,
          synopsis,
          trailerUrl,
          imageUrl,
          rating: +rating,
          GenreId: +GenreId,
          userMongoId,
          // UserId: req.user.id,
        },
        {
          transaction: t,
        }
      );

      await Cast.bulkCreate(
        [
          { MovieId: createMovie.id, name: name1, profilePict: profilePict1 },
          { MovieId: createMovie.id, name: name2, profilePict: profilePict2 },
          { MovieId: createMovie.id, name: name3, profilePict: profilePict3 },
        ],
        { transaction: t }
      );
      await t.commit();
      res.status(201).json({
        statusCode: 201,
        message: "Movie is created successfully",
      });
    } catch (error) {
      console.log(error);
      next(error);
      await t.rollback();
    }
  }

  static async updateMovie(req, res, next) {
    const t = await sequelize.transaction();
    try {
      // const UserId = req.user.id;
      const id = req.params.id;
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

      const data = await Movie.update(
        {
          title,
          synopsis,
          trailerUrl,
          imageUrl,
          rating: +rating,
          GenreId: +GenreId,
          userMongoId,
          // UserId: +UserId,
        },
        {
          where: {
            id,
          },
          individualHooks: true,
        },
        {
          transaction: t,
        }
      );

      if (!data) {
        throw {
          code: 404,
          msg: "Movie not found",
        };
      }

      await Cast.destroy(
        {
          where: {
            MovieId: id,
          },
        },
        {
          transaction: t,
        }
      );

      await Cast.bulkCreate(
        [
          { MovieId: id, name: name1, profilePict: profilePict1 },
          { MovieId: id, name: name2, profilePict: profilePict2 },
          { MovieId: id, name: name3, profilePict: profilePict3 },
        ],
        { transaction: t }
      );
      await t.commit();
      res.status(200).json({
        statusCode: 200,
        message: "Movie is updated successfully",
      });
    } catch (error) {
      console.log(error);
      next(error);
      await t.rollback();
    }
  }

  static async deleteMovieById(req, res, next) {
    try {
      const { id } = req.params;
      let data = await Movie.findByPk(req.params.id);
      if (!data) {
        throw {
          code: 404,
          msg: "Movie not found",
        };
      }

      await Movie.destroy({
        where: {
          id,
        },
      });

      if (!data) {
        throw {
          code: 404,
          msg: "Movie not found",
        };
      }

      res.status(200).json({
        statusCode: 200,
        message: `${data.title} is deleted successfully`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createNewGenre(req, res, next) {
    try {
      const { name } = req.body;
      await Genre.create({ name });
      res.status(201).json({
        statusCode: 201,
        message: "Genre is created successfully",
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateGenre(req, res, next) {
    try {
      const { name } = req.body;
      const { id } = req.params;
      await Genre.update({ name }, { where: { id } });
      res.status(201).json({
        statusCode: 201,
        message: "Genre is updated successfully",
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteGenreById(req, res, next) {
    try {
      const { id } = req.params;
      let data = await Genre.findByPk(id);
      if (!data) {
        throw {
          code: 404,
          msg: "Genre not found",
        };
      }
      await Genre.destroy({ where: { id: id } });
      res.status(200).json({
        statusCode: 200,
        message: `${data.name} is deleted successfully`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = movieController;
