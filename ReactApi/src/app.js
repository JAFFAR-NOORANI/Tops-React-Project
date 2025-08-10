const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const path = require("path");

const mongoose = require("mongoose");
app.use(express.json());

// https://tops-react-project.onrender.com

mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/users", require("../router/userRouter"));
app.use("/categories", require("../router/categoryRouter"));
app.use("/products", require("../router/productRouter"));
app.use(express.static(path.join(__dirname, "img")));

app.get("/", (req, resp) => {
  resp.send("Node Api - for ecommerce website");
});

app.listen(PORT, () => {
  console.log(`Sever Is Running On PORT = ${PORT}`);
});
