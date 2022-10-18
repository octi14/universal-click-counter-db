const express = require("express");
const cors = require("cors");

const NumberRoute = require("../routes/number.route");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (_req, res) => {
  res.status(200).json({
    message: "OK",
  });
});

app.use("/number", NumberRoute);

module.exports = app;
