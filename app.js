const express = require("express");
const  Joi = require('joi');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send("Welcome to vidly movie api");

});















app.listen(3000, function() {
  console.log("Server started on port 3000");
});