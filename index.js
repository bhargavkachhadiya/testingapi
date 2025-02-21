const express = require("express");
const mongoose = require("mongoose");
const Users = require("./models/Users");
const cors = require("cors");

const app = express();
app.use(cors());

const url =
  "mongodb+srv://bhargavkachhadiya1988:12345@bhargav.cmoi6kt.mongodb.net/?retryWrites=true&w=majority&appName=bhargav";

mongoose.set("strictQuery", true);
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => console.log(err));

app.get("/", async (req, res) => {
  const user = await Users.find();
  res.send(user);
});

app.post("/", async (req, res) => {
  const user = await Users.create(req.body);
  res.send(user);
});

app.listen(4000, () => {
  console.log("App is running on POST NO 4000");
});
