const express = require("express");
const router = express.Router();
const playController = require("../controllers/play-controller.js");

router.get("/emails", playController.emails);
router.get("/scene_0", playController.scene_0);
router.get("/scene_1", playController.scene_1);
router.get("/scene_2", playController.scene_2);
router.get("/scene_3", playController.scene_3);
router.get("/snap", playController.snap);
router.get("/retake", playController.retake);
router.get("/send", playController.send);


module.exports = router;