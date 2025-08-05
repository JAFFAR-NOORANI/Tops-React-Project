const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const mongoose = require("mongoose");

mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.get("/", (req, resp) => {
 resp.send ("Node Api - for ecommerce website")
})


app.listen(PORT, () => {
  console.log(`Sever Is Running On PORT = ${PORT}`);
});
