const express = require("express");
const router = express.Router();
const participantController = require("../controllers/participant-controller.js");

router.post("/create", participantController.create);

module.exports = router;