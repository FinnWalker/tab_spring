module.exports = {
  depthThreshold: function(req, res) {
    if(req.body.min && req.body.max) {
      res.status(200).json({ message: "Message sent" });
      req.app.io.emit("depth_threshold", {min: req.body.min, max: req.body.max});
    }
    else {
      res.status(300).json({message: "Please include min and max values."});
    }
  },
  brightness: function(req, res) {
    if(req.body.brightness) {
      res.status(200).json({ message: "Message sent" });
      req.app.io.emit("brightness", {brightness: req.body.brightness});
    }
    else {
      res.status(300).json({message: "Please include a brightness value."});
    }
  },
};
