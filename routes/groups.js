const express = require("express");
const router = express.Router();
const groupController = require("../controllers/group-controller.js");

router.post("/create", groupController.create);
router.get("/get", groupController.get);
router.put("/deactivate", groupController.deactivate);
router.put("/add", groupController.add);
router.get("/get_playing", groupController.getPlaying);
router.post("/play", groupController.play);
router.put("/stop_all", groupController.stopAll);
module.exports = router;