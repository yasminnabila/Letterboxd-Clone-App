const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/", Controller.readAllUsers);
router.get("/:id", Controller.readUserById);
router.post("/", Controller.createNewUser);
router.delete("/:id", Controller.deleteUserById);

module.exports = router;
