module.exports = (error, req, res, next) => {
  let code = 500;
  let msg = "Internal Server Error";
  if (
    error.name === "SequelizeValidationError" ||
    error.name === "SequelizeUniqueConstraintError"
  ) {
    code = 400;
    msg = error.errors[0].message;
  } else if (error.name === "JsonWebTokenError") {
    code = 401;
    msg = "Invalid token";
  } else if (error.name === "SequelizeDatabaseError") {
    code = 404;
    msg = "Database Error";
  } else if (error.code) {
    code = error.code;
    msg = error.msg;
  }
  res.status(code).json({
    message: msg,
  });
};
