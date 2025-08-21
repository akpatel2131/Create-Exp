const express = require("express");
const router = express.Router();
const controller = require("../controller");

router.get("/client", controller.getUserList);
router.post("/client", controller.createUser);

module.exports = router;