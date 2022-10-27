const router = require("express").Router();
const session = require("./session");
const movies = require("./movies");
const public = require("./public");
const ErrorHandler = require("../middlewares/ErrorHandler");

router.use("/public", public);
router.use("/", session);
router.use("/movies", movies);
router.use(ErrorHandler);

module.exports = router;
