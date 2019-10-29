const express = require("express");
const router = express.Router();
const groupController = require("../controllers/group-controller.js");

router.post("/depth_threshold", admingController.depthThreshold);


module.exports = router;