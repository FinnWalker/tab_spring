const participantModel = require("../models/participant.js");
const sanitize = require("mongo-sanitize");

module.exports = {
    create: function(req, res) {
        const eligible = sanitize(req.body.eligible);
        const terms = sanitize(req.body.terms);
        const first_name = sanitize(req.body.first_name);
        const last_name = sanitize(req.body.last_name);
        const date_of_birth = sanitize(req.body.date_of_birth);
        const email = sanitize(req.body.email);
        const mobile = sanitize(req.body.mobile);
        const marketing_tab = sanitize(req.body.marketing_tab);
        const marketing_atc = sanitize(req.body.marketing_atc);

        if(eligible && terms && first_name && last_name && date_of_birth && email && mobile && marketing_tab && marketing_atc) {
            participantModel.create({eligible, terms, first_name, last_name, date_of_birth, email, mobile, marketing_tab, marketing_atc, active: true}, function(err, participant) {
                if(err) {
                    res.status(500).json({message: "Error creating participant"});
                } else {
                    res.status(200).json({participant});
                }
            });
        } else {
            res.status(400).json({message: "Please include all fields"});
        }
    },
    get: function(req, res) {
        const participant_id = sanitize(req.body.participant_id);
        participantModel.findOne({_id: participant_id}, (err, participant) => {
            if(err) {
                res.status(500).json({message: "There was an error finding participants"});
            } else {
                res.status(200).json({name: participant.first_name});
            }
        })
    }
}