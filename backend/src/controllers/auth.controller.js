const authService = require("../services/auth.service");
const authMiddlaware = require("../middleware/auth.middleware");

async function authUser(req, res) {
  try {
    const user = await authService.authenticateUser(req.body);
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = { authUser };
