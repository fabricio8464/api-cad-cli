const express = require("express");

const app = express();
const costumerRoutes = require("./routes/costumer.routes");

app.use(express.json());
app.use("/api", costumerRoutes);

module.exports = app;
