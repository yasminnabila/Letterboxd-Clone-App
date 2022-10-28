const express = require("express");
const router = express.Router();
const app = require("./appService");
const user = require("./userService");
const ErrorHandler = require("../middlewares/ErrorHandler");

router.use("/movies", app);
router.use("/users", user);
router.use(ErrorHandler);

module.exports = router;
