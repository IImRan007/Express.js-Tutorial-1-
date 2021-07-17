const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("Hello from about Page");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
