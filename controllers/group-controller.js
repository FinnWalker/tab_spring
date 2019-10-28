const groupModel = require("../models/group.js");
const sanitize = require("mongo-sanitize");

module.exports = {
  create: function(req, res) {
    groupModel.create(
      {
        participant_0: "null",
        participant_1: "null",
        participant_2: "null",
        participant_3: "null",
        active: true,
        playing: false
      },
      function(err, group) {
        if (err) {
          res.status(500).json({ message: "Error creating group" });
        } else {
          res.status(200).json({ group });
        }
      }
    );
  },
  add: function(req, res) {
    const participant_id = sanitize(req.body.participant_id);
    const group_id = sanitize(req.body.group_id);
    const participant_index = sanitize(req.body.participant_index);

    if (participant_id && group_id && participant_index) {
      groupModel.findOne({ _id: group_id }, (err, group) => {
        if (err) {
          res
            .status(500)
            .json({ message: "There was an error finding the group" });
        } else if (group) {
          if (participant_index === "0") {
            group.participant_0 = participant_id;
          } else if (participant_index === "1") {
            group.participant_1 = participant_id;
          } else if (participant_index === "2") {
            group.participant_2 = participant_id;
          } else if (participant_index === "3") {
            group.participant_3 = participant_id;
          }
          group.save();
          res.status(200).json(group);
        } else {
          res.status(300).json({ message: "Could not find group" });
        }
      });
    } else {
      res.status(300).json({ message: "Please include all fields" });
    }
  },
  get: function(req, res) {
    groupModel.find({ active: true }, (err, groups) => {
      if (err) {
        res.status(500).json({ message: "There was an error finding groups" });
      } else {
        res.status(200).json({ groups });
      }
    });
  },
  getPlaying: function(req, res) {
    groupModel.findOne({ playing: true }, (err, group) => {
      if (err) {
        res
          .status(500)
          .json({ message: "There was an error finding the group" });
      } else if (group) {
        res.status(200).json(group);
      } else {
          res.status(200).json({});
      }
    });
  },
  deactivate: function(req, res) {
      groupModel.find({ playing: true }, (err, groups) => {
        if (err) {
          res
            .status(500)
            .json({ message: "There was an error deleting the group" });
        } else if (groups) {
          for (let group of groups) {
            group.active = false;
            group.playing = false;
            group.save();
          }
          res.status(200).json({ message: "Groups deactivated" });
        } else {
          res.status(300).json({ message: "Could not find groups" });
        }
      });

  },
  play: function(req, res) {
    const id = sanitize(req.body.group_id);
    if (id) {
      groupModel.findOne({ _id: id }, (err, group) => {
        if (err) {
          res
            .status(500)
            .json({ message: "There was an error deleting the group" });
        } else if (group) {
          groupModel.find({playing: true}, (err, groups) => {
            if(groups) {
              for (let group of groups) {
                group.playing = false;
                group.save();
              }
            }
          }).then(() => {
            group.playing = true;
            group.save();
            res.status(200).json({ message: "Group playing" });
            req.app.io.emit('start');
          });
        } else {
          res.status(300).json({ message: "Could not find group" });
        }
      });
    } else {
      res.status(300).json({ message: "Please include all fields" });
    }
  },
  stopAll: function(req, res) {
    groupModel.find({}, (err, groups) => {
      if (err) {
        res
          .status(500)
          .json({ message: "There was an error stopping a group" });
      } else if (groups) {
        for (let group of groups) {
          group.playing = false;
          group.save();
        }
        res.status(200).json({ message: "Groups stopped" });
      } else {
        res.status(300).json({ message: "Could not find groups" });
      }
    });
  }
};
