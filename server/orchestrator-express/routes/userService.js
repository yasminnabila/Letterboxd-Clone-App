const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.readAllUsers);
router.post("/", userController.createNewUser);
router.get("/:id", userController.readUserById);
router.delete("/:id", userController.deleteUserById);

module.exports = router;
