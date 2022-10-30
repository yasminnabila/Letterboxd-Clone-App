const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.readAllUsers);
router.post("/", usersController.createNewUser);
router.get("/:id", usersController.readUserById);
router.delete("/:id", usersController.deleteUserById);

module.exports = router;
