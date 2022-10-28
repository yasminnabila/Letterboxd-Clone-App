const router = require("express").Router();
const appController = require("../controllers/appController");

router.get("/", appController.readAllMovies);
router.post("/", appController.createNewMovie);
router.get("/:id", appController.readOneMovieById);
router.put("/:id", appController.updateMovie);

module.exports = router;
