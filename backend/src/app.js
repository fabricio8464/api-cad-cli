const express = require("express");

const app = express();
const costumerRoutes = require("./routes/costumer.routes");
const userRotes = require("./routes/authenticate.route");

app.use(express.json());
app.use("/api", costumerRoutes);
app.use("/api", userRotes);

module.exports = app;
