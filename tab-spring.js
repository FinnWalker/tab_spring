const mongodb = require("./config/database.js");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));


app.use("/tab_spring/", express.static("public"));


function verifyRequest(req, res, next) {
    if(req.headers["access-key"] === "SpringWall") {
        next();
    } else {
        res.status(400).json({message: "Access denied"});
    }
}

const participants = require("./routes/participants.js");
app.use("/tab_spring/api/", verifyRequest, participants);

const port = 6666;
app.listen(port, "0.0.0.0", () => {console.log(`App listening on port ${port}`)});