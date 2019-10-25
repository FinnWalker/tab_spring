const express = require("express");
const router = express.Router();
const participantController = require("../controllers/participant-controller.js");

router.post("/create", participantController.create);
router.get("/get", participantController.get);
router.put("/deactivate", participantController.deactivate);
module.exports = router;