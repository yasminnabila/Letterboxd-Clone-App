const { User } = require("../models");
const { compareHashedPassword } = require("../helpers/bcryptjs");
const { signJWT } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");

class userController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const newUser = await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
      });
      res.status(201).json({
        statusCode: 201,
        message: "User created successfully",
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
        phoneNumber: newUser.phoneNumber,
        address: newUser.address,
      });
    } catch (error) {
      //   console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw {
          code: 401,
          msg: "Email/ password cannot be empty",
        };
      }
      const foundUser = await User.findOne({
        where: {
          email,
        },
      });
      if (!foundUser) {
        throw {
          code: 401,
          msg: "Invalid email/ password",
        };
      }

      if (foundUser.role === "Customer") {
        throw {
          code: 403,
          msg: "Customer has no access",
        };
      }
      const comparePassword = compareHashedPassword(
        foundUser.password,
        password
      );
      if (!comparePassword) {
        throw {
          code: 401,
          msg: "Invalid email/ password",
        };
      }
      const payload = {
        id: foundUser.id,
        email: foundUser.email,
        role: foundUser.role,
      };
      const token = signJWT(payload);

      res.status(200).json({
        statusCode: 200,
        message: "User logged in successfully",
        access_token: token,
        id: foundUser.id,
        email: foundUser.email,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async googleLogIn(req, res, next) {
    try {
      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
      const ticket = await client.verifyIdToken({
        idToken: req.headers.access_token_google,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      const data = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          username: payload.given_name,
          email: payload.email,
          password: "googlepass",
          role: "Staff",
          phoneNumber: "12345",
          address: "google",
        },
        hooks: false,
      });

      let user = data[0];
      const token = payloadToToken({
        id: user.id,
      });

      const username = payload.given_name;

      res.status(200).json({
        statusCode: 200,
        access_token: token,
        email: user.email,
        username,
        id: user.id,
        role: user.role,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = userController;
