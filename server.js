const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const routes = require(path.join(__dirname, "/controllers/fitnessRoutes.js"));

const app = express();

const PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log("app is listening on port: " + PORT);
});
