const express = require("express");

const app = express();

app.use('/tab_spring/', express.static("public"));

const port = 6666;
app.listen(port, "0.0.0.0", () => {console.log(`App listening on port ${port}`)});