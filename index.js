const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.listen(4000, () => {
  console.log("App is running on POST NO 4000");
});
