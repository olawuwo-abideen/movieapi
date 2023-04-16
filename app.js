const express = require("express");
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send("Welcome to vidly movie api");

});





app.get('/api/genres', (req, res) => {
  res.send(genres);

});





app.listen(3000, function() {
  console.log("Server started on port 3000");
});