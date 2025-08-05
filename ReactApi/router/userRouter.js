const express = require("express");
const router = express.Router();
const User = require("../model/users");

router.post("/", async (req, resp) => {
  try {
    const user = new User(req.body);
    const createdUser = await user.save();
    resp.status(201).send(createdUser);
  } catch (error) {
    resp.send(error);
  }
});

module.exports = router;
