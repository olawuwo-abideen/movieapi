const express = require("express");
const  Joi = require('joi');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send("Welcome to vidly movie api");

});


const genre = [
  {type: "comedy", name:'Bob hearts abishola'},
  {type: "horror", name:'Scream'},
  {type: "superhero", name:'Thor'},
];











app.get('/api/genre', (req, res) => {
  res.send(genre);

});






app.listen(3000, function() {
  console.log("Server started on port 3000");
});