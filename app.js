const express = require("express");
const cors = require("cors");
const fs = require("fs");

let agents = JSON.parse(fs.readFileSync("./json-data/agents.json"));
let logs = JSON.parse(fs.readFileSync("./json-data/logs.json"));
let resolution = JSON.parse(fs.readFileSync("./json-data/resolution.json"));

const app = express();
app.use(cors());

app.get("/agents", function (req, res, next) {
  res.json(agents);
});

app.get("/logs", function (req, res, next) {
  res.json(logs);
});

app.get("/resolution", function (req, res, next) {
  res.json(resolution);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
