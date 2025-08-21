const express = require("express");
const router = express.Router();
const controller = require("../controller");

router.get("/users", controller.getUserList);
router.post("/users", controller.createUser);

module.exports = router;