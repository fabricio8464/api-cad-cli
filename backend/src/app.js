const express = require("express");

const app = express();
const costumerRoutes = require("./routes/costumer.routes");
const auth = require("./routes/authenticate.route");
const UserRotes = require("./routes/user.routes");

app.use(express.json());
app.use("/api", costumerRoutes);
app.use("/api", auth);
app.use("/api", UserRotes);

module.exports = app;
