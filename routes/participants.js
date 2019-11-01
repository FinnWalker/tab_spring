const express = require("express");
const router = express.Router();
const participantController = require("../controllers/participant-controller.js");

router.post("/create", participantController.create);
router.post("/get", participantController.get);
router.get("/unsubscribe", participantController.unsubscribe);
module.exports = router;