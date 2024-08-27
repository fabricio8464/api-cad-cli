const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/login", authController.authUser);
router.post("create-user", authController.testeUsers);
router.get("/teste", authController.testeUsers);

module.exports = router;
