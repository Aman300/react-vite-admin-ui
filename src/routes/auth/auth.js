const express = require("express");
const { userLogin } = require("../../controllers/auth/auth.user");
const { loginValidation } = require("../../middleware/auth.validation");
const auth = express.Router();

auth.post("/login", loginValidation, userLogin);

module.exports = auth;