const { tokenJWT } = require("../helpers/jwt");
const { User, Movie } = require("../models");

const Authentication = async (req, res, next) => {
  try {
    const access_token = req.headers.access_token;
    if (!access_token) {
      throw {
        code: 401,
        msg: "No token is received",
      };
    }
    const payload = tokenJWT(access_token);
    const user = await User.findByPk(payload.id);
    if (!user) {
      throw {
        code: 401,
        msg: "Invalid token",
      };
    }

    req.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (error) {
    next(error);
  }
};

const AuthorizationAdmin = async (req, res, next) => {
  try {
    const { role } = req.user;

    if (role !== "Admin") {
      throw {
        code: 403,
        msg: "Admin access only",
      };
    }
    next();
  } catch (error) {
    next(error);
  }
};

const AuthorizationDelete = async (req, res, next) => {
  try {
    const { id, role } = req.user;
    const Movieid = req.params.id;
    if (role === "Admin") {
      return next();
    }

    const findMovie = await Movie.findOne({
      where: {
        id: Movieid,
      },
    });

    if (!findMovie) {
      throw {
        code: 404,
        msg: "Movie not found",
      };
    }

    if (role === "Staff") {
      if (data.UserId !== id) {
         throw {
           code: 403,
           msg: "Admin access only",
         };
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  Authentication,
  AuthorizationAdmin,
  AuthorizationDelete,
};
