const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/tab_spring";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;