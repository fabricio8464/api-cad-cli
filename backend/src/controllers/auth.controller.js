const authService = require("../services/auth.service");
const authMiddlaware = require("../middleware/auth.middleware");

async function authUser(req, res, next) {
  try {
    const user = await authService.authenticateUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
}

async function testeUsers(req, res, next) {
  try {
    const token = authMiddlaware.verifyToken(req, res, next);
    const user = await authService.teste();
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { authUser, testeUsers };
