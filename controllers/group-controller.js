const groupModel = require("../models/group.js");
const sanitize = require("mongo-sanitize");

module.exports = {
    create: function(req, res) {
        groupModel.create({}, function(err, participant) {
            if(err) {
                res.status(500).json({message: "Error creating group"});
            } else {
                res.status(200).json({group});
            }
        });
    },
    get: function(req, res) {
        groupModel.find({}, (err, groups) => {
            if(err) {
                res.status(500).json({message: "There was an error finding groups"});
            } else {
                res.status(200).json({groups});
            }
        });
    },
    delete: function(req, res) {
        const id = sanitize(req.body.id);
        participantModel.findOne({_id: id}).remove((err, result) => {
            if (err) {
                res.status(500).json({message: "There was an error deleting the group"});
            } else {
                res.status(200).json({message: "Group deleted"});
            }
        }); 
    }
}