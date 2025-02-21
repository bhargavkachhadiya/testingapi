const express = require("express");
const mongoose = require("mongoose");
const Users = require("./models/Users");
const app = express();

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
  //   res.send({ name: "Bhargav", surname: "Kachhadiya" });
  res.send(user);
});

app.listen(4000, () => {
  console.log("App is running on POST NO 4000");
});
