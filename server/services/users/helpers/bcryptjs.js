const bcrypt = require("bcryptjs");

const hashedPassword = (password) => {
  return bcrypt.hashSync(password);
};

const compareHashedPassword = (hash, password) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = {
  hashedPassword,
  compareHashedPassword,
};
