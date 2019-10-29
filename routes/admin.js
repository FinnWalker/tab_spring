const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller.js");

router.post("/depth_threshold", adminController.depthThreshold);


module.exports = router;