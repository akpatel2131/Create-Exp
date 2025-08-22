const express = require("express");
const router = express.Router();
const controller = require("../controller");
const validateUser = require("../middleware");

router.get("/client", controller.getUserList);
router.post("/client", validateUser, controller.createUser);

module.exports = router;