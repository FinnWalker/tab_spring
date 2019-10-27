const express = require("express");
const router = express.Router();
const groupController = require("../controllers/group-controller.js");

router.post("/create", groupController.create);
router.get("/get", groupController.get);
router.put("/deactivate", groupController.deactivate);
router.put("/add", groupController.add);
router.post("/get_particular", groupController.getParticular);
router.post("/play", groupController.play);
router.post("/stop_all", groupController.stopAll);
module.exports = router;