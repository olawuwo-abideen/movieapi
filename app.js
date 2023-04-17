const express = require("express");
const app = express();

app.use(express.json())

const action = require("./data/action.json");
const comedy = require("./data/comedy.json");
const disaster = require("./data/disaster.json");
const history = require("./data/history.json");
const horror = require("./data/horror.json");
const sci_fi = require("./data/horror.json");
const war = require("./data/war.json");
const developer = require("./data/developer.json")


app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// get request

app.get("/api/genre/comedy", (req, res) => {
  res.send(comedy);
});

app.get("/api/genre/action", (req, res) => {
  res.send(action);
});
app.get("/api/genre/disaster", (req, res) => {
  res.send(disaster);
});
app.get("/api/genre/history", (req, res) => {
  res.send(history);
});

app.get("/api/genre/horror", (req, res) => {
  res.send(horror);
});

app.get("/api/genre/scifi", (req, res) => {
  res.send(sci_fi);
});

app.get("/api/genre/war", (req, res) => {
  res.send(war);
});


app.get('/api/genre/action/:id', (req, res) => {
  const findAction = action.find(c => c.id === parseInt(req.params.id));
  if (!findAction) return res.status(404).send('The movie with the given ID was not found')
  res.send(findAction);
});

app.get("/api/developer", (req, res) => {
  res.send(developer);
});





















































































































app.listen(3000, function() {
  console.log("Server started on port 3000");
});