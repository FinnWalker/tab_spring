const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
    eligible: Boolean,
    terms: Boolean,
    first_name: String,
    last_name: String,
    date_of_birth: String,
    email: String,
    mobile_number: String,
    marketing_tab: Boolean,
    marketing_atc: Boolean,
    active: Boolean,
    unsubscribed: false
});

module.exports = mongoose.model("Participant", ParticipantSchema);