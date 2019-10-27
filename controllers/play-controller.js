const groupModel = require("../models/group.js");
const participantModel = require("../models/participant.js");

module.exports = {
  emails: function(req, res) {
    let emails = [];
    groupModel.findOne({ playing: true }, (err, group) => {
      if (group) {
        participantModel.findOne(
          { _id: group.participant_0 },
          (err, participant) => {
            if (participant) {
              emails.push(participant.email);
            }
            participantModel.findOne(
              { _id: group.participant_1 },
              (err, participant) => {
                if (participant) {
                  emails.push(participant.email);
                }
                participantModel.findOne(
                  { _id: group.participant_2 },
                  (err, participant) => {
                    if (participant) {
                      emails.push(participant.email);
                    }
                    participantModel.findOne(
                      { _id: group.participant_3 },
                      (err, participant) => {
                        if (participant) {
                          emails.push(participant.email);
                        }
                        res.status(200).json(emails);
                      }
                    );
                  }
                );
              }
            );
          }
        );
      } else {
        res.status(200).json({ message: "No playing group found" });
      }
    });
  },
  scene_0: function(req, res) {
    res.status(200).json({ message: "Message sent" });
    req.app.io.emit("scene_0");
  },
  scene_1: function(req, res) {
    res.status(200).json({ message: "Message sent" });
    req.app.io.emit("scene_1");
  },
  scene_2: function(req, res) {
    res.status(200).json({ message: "Message sent" });
    req.app.io.emit("scene_2");
  },
  scene_3: function(req, res) {
    res.status(200).json({ message: "Message sent" });
    req.app.io.emit("scene_3");
  },
  snap: function(req, res) {
    res.status(200).json({ message: "Message sent" });
    req.app.io.emit("snap");
  },
  send: function(req, res) {
    res.status(200).json({ message: "Message sent" });
    req.app.io.emit("send");
  }
};
