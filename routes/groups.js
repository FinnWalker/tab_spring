const express = require("express");
const router = express.Router();
const groupController = require("../controllers/group-controller.js");

router.post("/create", groupController.create);
router.get("/get", groupController.get);
router.put("/deactivate", groupController.delete);

module.exports = router;