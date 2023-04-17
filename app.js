const express = require("express");
const app = express();

app.use(express.json())

const action = require("./data/action.json");
const comedy = require("./data/comedy.json");
const disaster = require("./data/disaster.json");
const history = require("./data/history.json");
const horror = require("./data/horror.json");
const sci_fi = require("./data/horror.json");
const developer = require("./data/developer.json")


app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// get endpoint

app.get("/api/action", (req, res) => {
  res.send(action);
});

app.get("/api/comedy", (req, res) => {
  res.send(comedy);
});

app.get("/api/disaster", (req, res) => {
  res.send(disaster);
});

app.get("/api/history", (req, res) => {
  res.send(history);
});

app.get("/api/horror", (req, res) => {
  res.send(horror);
});

app.get("/api/scifi", (req, res) => {
  res.send(sci_fi);
});

app.get("/api/developer", (req, res) => {
  res.send(developer);
});


app.get("/api/developer/:name", (req, res) => {
  res.send(developer);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});