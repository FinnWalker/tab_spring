const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    participant_0: String,
    participant_1: String,
    participant_2: String,
    participant_3: String,
    active: Boolean
});

module.exports = mongoose.model("Group", GroupSchema);