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
                        if (err) {
                          res
                            .status(500)
                            .json({ message: "Error finding participant" });
                        } else if (participant) {
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
      }
    });
  }
};
