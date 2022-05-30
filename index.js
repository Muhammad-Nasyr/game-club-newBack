const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require('path')
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/image", express.static(path.resolve(__dirname, "image")));

app.use(require("./routes"));

mongoose
  .connect(process.env.URL)
  .then(() => console.log("Connected to the MongoDB..."))
  .catch(() => "Error");

app.listen(process.env.PORT, () => {
  console.log("Server has been started...");
});
