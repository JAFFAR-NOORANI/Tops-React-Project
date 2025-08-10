const router = require("express").Router();
const multer = require("multer");
const Product = require("../model/products");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "img");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("file"), async (req, resp) => {
  req.body.image_url = req.file.filename;
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    resp.status(201).send(savedProduct);
  } catch (error) {
    resp.send(error);
  }
});

router.get("/image/:name", (req, resp) => {
  const imageName = req.params.name;
  const mpath = path.resolve(__dirname, "..");
  console.log(path);

  const imagePath = path.join(mpath, "img", imageName);

  resp.sendFile(imagePath, (err) => {
    if (err) {
      console.log(err);

      resp.status(404).send("Image not found");
    }
  });
});

router.get("/", async (req, resp) => {
  try {
    const products = await Product.find();
    products.map((ele) => {
      ele.image_url = process.env.IMGURL + "/product/image/" + ele.image_url;
    });

    resp.status(200).send(products);
  } catch (error) {}
});

module.exports = router;
