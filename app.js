const express = require("express");
const app = express();

app.use(express.json())

const actions = require("./data/action.json");
const comedies = require("./data/comedy.json");
const disasters = require("./data/disaster.json");
const histories = require("./data/history.json");
const horrors = require("./data/horror.json");
const scifis = require("./data/horror.json");
const wars = require("./data/war.json");
const developer = require("./data/developer.json")


app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});



// get request

app.get("/api/genre/comedies", (req, res) => {
  res.send(comedies);
});

app.get("/api/genre/actions", (req, res) => {
  res.send(actions);
});
app.get("/api/genre/disasters", (req, res) => {
  res.send(disasters);
});
app.get("/api/genre/histories", (req, res) => {
  res.send(histories);
});

app.get("/api/genre/horrors", (req, res) => {
  res.send(horrors);
});

app.get("/api/genre/scifis", (req, res) => {
  res.send(scifis);
});

app.get("/api/genre/wars", (req, res) => {
  res.send(wars);
});


app.get('/api/genre/actions/:id', (req, res) => {
  const findAction = actions.find(c => c.id === parseInt(req.params.id));
  if (!findAction) return res.status(404).send('The movie with the given ID was not found')
  res.send(findAction);
});

app.get("/api/developer", (req, res) => {
  res.send(developer);
});

app.get('/api/genre/disasters/:id', (req, res) => {
  const findDisaster = disasters.find(c => c.id === parseInt(req.params.id));
  if (!findDisaster) return res.status(404).send('The movie with the given ID was not found')
  res.send(findDisaster);
});

app.get('/api/genre/actions/:id', (req, res) => {
  const findAction = actions.find(c => c.id === parseInt(req.params.id));
  if (!findAction) return res.status(404).send('The movie with the given ID was not found')
  res.send(findAction);
});


// post request

app.post('/api/genre/actions', (req, res) => {  
  const action = {
    id: actions.length + 1,
    title: req.body.title,
    rating: req.body.rating,
    year: req.body.year,
    summary: req.body.summary,
    director: req.body.director,
  };
  actions.push(action);
  res.send(action);
  });

  app.post('/api/genre/comedies', (req, res) => {  
    const comedy = {
      id: comedies.length + 1,
      title: req.body.title,
      rating: req.body.rating,
      year: req.body.year,
      summary: req.body.summary,
      director: req.body.director,
    };
    comedies.push(comedy);
    res.send(comedy);
    });


   

//delete request

app.delete('/api/genre/actions/:id', (req, res) => {
  const action = actions.find(c => c.id === parseInt(req.params.id));
  if (!action) res.status(404).send('The movie with the given ID was not found')

  const index = actions.indexOf(action);
  actions.splice(index, 6);

  res.send(action); 

});











app.listen(3000, function() {
  console.log("Server started on port 3000");
});