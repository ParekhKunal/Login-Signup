const { request, response } = require("express");
const express = require("express");
const router = express();
const bcrypt = require("bcrypt");
const signUpTemplateCopy = require("../models/SignUpModels");

router.post("/signup", async (request, response) => {
  const saltPassword = await bcrypt.genSaltSync(10);
  const securePassword = await bcrypt.hashSync(
    request.body.password,
    saltPassword
  );

  const signedUpUser = new signUpTemplateCopy({
    fullName: request.body.fullName,
    username: request.body.username,
    email: request.body.email,
    password: securePassword,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
