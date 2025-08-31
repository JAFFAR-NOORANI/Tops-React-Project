const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const path = require("path");
const cors = require('cors');

const mongoose = require("mongoose");
app.use(express.json());


// for cros 

// app.use(cors({
//   origin: 'http://localhost:5173', // or '*' for any origin
// }));

// app.get('/products', (req, res) => {
//   res.json({ message: "Hello from backend" });
// });

// app.listen(3000, () => console.log('Server running on 3000'));



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
app.use("/carts", require("../router/cartRouter"));





// app.use("/products/image", express.static(path.join(__dirname, "..", "img")));

app.get("/", (req, resp) => {
  resp.send("Node Api - for ecommerce website");
});

app.listen(PORT, () => {
  console.log(`Sever Is Running On PORT = ${PORT}`);
});
