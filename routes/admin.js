const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller.js");

router.post("/depth_threshold", adminController.depthThreshold);
router.post("/brightness", adminController.brightness);

module.exports = router;