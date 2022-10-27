const router = require("express").Router();
const appController = require("../controllers/appController");

router.get("/", appController.readAllMovies);

module.exports = router;
