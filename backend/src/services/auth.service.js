const prisma = require("../prisma/client");
const auth = require("../middleware/auth.middleware");
const bcrypt = require("bcrypt");

async function authenticateUser(data) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
      select: {
        email: true,
        password: true,
      },
    });
    const passwordVerify = await verifyBcriptPassword(
      data.password,
      user.password
    );
    if (user && passwordVerify) {
      const token = auth.Authentication(user);
      delete user.password;
      return { token, user };
    }
    return {
      message:
        "usuario não encontrado, verifique se senha e o email se estão corretos!",
    };
  } catch (err) {
    console.log(err);
  }
}

async function verifyBcriptPassword(stringPassword, hashPassword) {
  try {
    const verifyPassword = await bcrypt.compare(stringPassword, hashPassword);
    return verifyPassword;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { authenticateUser };
