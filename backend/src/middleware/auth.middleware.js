const jwt = require("jsonwebtoken");
const app = require("../app");
const SECRET = "pitanguinha";

function Authentication(user) {
  const token = jwt.sign({ userId: user.id }, SECRET);
  return token;
}

function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];

  console.log("esse é o token", token);
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end();

    return true;
  });
}

module.exports = {
  Authentication,
  verifyToken,
};
