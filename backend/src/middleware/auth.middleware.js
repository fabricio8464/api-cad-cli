const jwt = require("jsonwebtoken");
const app = require("../app");
const SECRET = "pitanguinha";

function Authentication(user) {
  const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: "1h" });
  return token;
}

function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end();
  });
}

module.exports = {
  Authentication,
  verifyToken,
};
