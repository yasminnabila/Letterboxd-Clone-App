const jwt = require("jsonwebtoken");

const signJWT = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY);
};

const tokenJWT = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};

module.exports = {
  signJWT,
  tokenJWT,
};
