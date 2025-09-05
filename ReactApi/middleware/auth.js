const jwt = require("jsonwebtoken");
const User = require("../model/users");

const auth = async (req, resp, next) => {
  try {
    const token = req.header("authtoken");
    const verifiedToken = await jwt.verify(token, process.env.SKEY);

    if (verifiedToken) {
      req.user = await User.findOne({ _id: verifiedToken._id });
// console.log(req.user);

      next();
    } else {
      resp.status(401).send("Invalid Token");
    }
  } catch (error) {
    resp.status(401).send("Something Went Wrong !!!!");
  }
};

module.exports = auth;
