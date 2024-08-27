const prisma = require("../prisma/client");
const auth = require("../middleware/auth.middleware");

async function authenticateUser(data) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (user) {
      const token = auth.Authentication(user);
      return { token, user };
    }
    return user;
  } catch (err) {
    console.log(err);
  }
}

async function teste() {
  return await prisma.user.findMany();
}

module.exports = { authenticateUser, teste };
