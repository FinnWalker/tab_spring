const mongodb = require("./config/database.js");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({extended: false}));


app.use("/tab_spring/", express.static("public"));


function verifyRequest(req, res, next) {
    if(req.headers["accesskey"] === "SpringWall") {
        next();
    } else {
	console.log(req.headers);
        res.status(400).json({message: "Access denied"});
    }
}

const participants = require("./routes/participants.js");
app.use("/tab_spring/api/participants", verifyRequest, participants);

const groups = require("./routes/groups.js");
app.use("/tab_spring/api/groups", verifyRequest, groups);

const port = 6666;
app.listen(port, "0.0.0.0", () => {console.log(`App listening on port ${port}`)});
