const groupModel = require("../models/group.js");
const participantModel = require("../models/participant.js");

module.exports = {
  emails: function(req, res) {
    groupModel.findOne({ playing: true }, (err, group) => {
      if (err) {
        res.status(500).json({ message: "Error finding group" });
      } else if (group) {
        participantModel.findOne(
          { _id: group.participant_0 },
          (err, participant) => {
            if (err) {
              res.status(500).json({ message: "Error finding participant" });
            } else if (participant) {
              const email_0 = participant.email;
              participantModel.findOne(
                { _id: group.participant_1 },
                (err, participant) => {
                  if (err) {
                    res
                      .status(500)
                      .json({ message: "Error finding participant" });
                  } else if (participant) {
                    const email_1 = participant.email;
                    participantModel.findOne(
                      { _id: group.participant_2 },
                      (err, participant) => {
                        if (err) {
                          res
                            .status(500)
                            .json({ message: "Error finding participant" });
                        } else if (participant) {
                          const email_2 = participant.email;
                          participantModel.findOne(
                            { _id: group.participant_3 },
                            (err, participant) => {
                              if (err) {
                                res
                                  .status(500)
                                  .json({
                                    message: "Error finding participant"
                                  });
                              } else if (participant) {
                                const email_3 = participant.email;
                                res.status(200).json({email_0, email_1, email_2, email_3});
                              } else {
                                res
                                  .status(500)
                                  .json({
                                    message: "Error finding participant"
                                  });
                              }
                            }
                          );
                        } else {
                          res
                            .status(500)
                            .json({ message: "Error finding participant" });
                        }
                      }
                    );
                  } else {
                    res
                      .status(500)
                      .json({ message: "Error finding participant" });
                  }
                }
              );
            } else {
              res.status(500).json({ message: "Error finding participant" });
            }
          }
        );
      } else {
        res.status(200).json({ message: "No playing group found" });
      }
    });
  }
};
