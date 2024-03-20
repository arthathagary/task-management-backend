const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
const events = require("./routes/events");
app.use("/api/v1", events);

module.exports = app;
