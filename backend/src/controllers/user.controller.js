const prisma = require("../prisma/client");
const auth = require("../middleware/auth.middleware");
const userService = require("../services/user.service");
const bcrypt = require("bcrypt");

async function readUsers(req, res) {
  try {
    const token = auth.verifyToken(req, res);
    const user = await userService.getUsers();
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = { readUsers };
