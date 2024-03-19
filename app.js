const express = require("express");
const app = express();

app.use(express.json());
const events = require("./routes/events");
app.use("/api/v1", events);

module.exports = app;
