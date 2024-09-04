const prisma = require("../prisma/client");
const auth = require("../middleware/auth.middleware");

async function getUsers() {
  return await prisma.user.findMany();
}

module.exports = { getUsers };
