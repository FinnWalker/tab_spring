const groupModel = require("../models/group.js");
const participantModel = require("../models/participant.js");

module.exports = {
  scene_1: function(req, res) {
    if(req.body.min && req.body.max) {
      res.status(200).json({ message: "Message sent" });
      req.app.io.emit("depth_threshold", {min: req.body.min, max: req.body.max});
    }
  },
};
