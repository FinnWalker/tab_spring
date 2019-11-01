const mongodb = require("./config/database.js");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/tab_spring/", express.static("public"));

function verifyRequest(req, res, next) {
  if (req.headers["accesskey"] === "SpringWall") {
    next();
  } else {
    console.log(req.headers);
    res.status(400).json({ message: "Access denied" });
  }
}

const participants = require("./routes/participants.js");
app.use("/tab_spring/api/participants", verifyRequest, participants);

const groups = require("./routes/groups.js");
app.use("/tab_spring/api/groups", verifyRequest, groups);

const plays = require("./routes/plays.js");
app.use("/tab_spring/api/plays", verifyRequest, plays);

const admin = require("./routes/admin.js");
app.use("/tab_spring/admin/", verifyRequest, admin);

app.post("/tab_spring/api/signature", (req, res) => {
  var base64Data = req.body.img.replace(/^data:image\/png;base64,/, "");
  require("fs").writeFile(
    `./signatures/${req.body.id}.png`,
    base64Data,
    "base64",
    function(err) {
      if (err) console.log(err);
    }
  );
  res.json({});
});

const participantController = require("./controllers/participant-controller.js");
app.get("tab_spring/api/unsubscribe", participantController.unsubscribe);


const port = 6666;
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`App listening on port ${port}`);
});


const io = require("socket.io").listen(server, {
    path: "/tab_spring/socket.io"
});

app.io = io;

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('test');
    socket.on('test', (data) => {
        console.log('that was a test');
    });
});