const express = require("express");
const router = express.Router();
const playController = require("../controllers/play-controller.js");

router.get("/emails", playController.emails);

module.exports = router;