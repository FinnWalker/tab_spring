const mongodb = require("./config/database.js");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));


app.use("/tab_spring/", express.static("public"));

const participants = require("./routes/participants.js");
app.use("/tab_spring/api/", participants);

const port = 6666;
app.listen(port, "0.0.0.0", () => {console.log(`App listening on port ${port}`)});