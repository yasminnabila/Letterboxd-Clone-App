const router = require("express").Router();
const movieController = require("../controllers/movieController");
const {
  AuthorizationAdmin,
  AuthorizationDelete,
} = require("../middlewares/Authz");

router.get("/", movieController.readAllMovies);
router.get("/detail", movieController.readOneMovieBySlug);
router.post("/", movieController.createNewMovie);
router.get("/genres", movieController.readAllGenres);
router.post("/genres", movieController.createNewGenre);
router.get("/casts", movieController.readAllCasts);
router.get("/:id", movieController.readOneMovieById);
router.put("/:id", AuthorizationAdmin, movieController.updateMovie);
router.delete("/:id", AuthorizationDelete, movieController.deleteMovieById);
router.put("/genres/:id", movieController.updateGenre);
router.delete("/genres/:id", movieController.deleteGenreById);

module.exports = router;
