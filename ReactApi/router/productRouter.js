const router = require("express").Router();
const multer = require("multer");
const Product = require("../model/products");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configuration
cloudinary.config({
  cloud_name: process.env.CNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // cb(null, "img");
//     cb(null, path.join(__dirname, "..", "img"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// cloudinary upload image to storage

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "img", // Cloudinary folder name
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, resp) => {
  // console.log(req.file.path);

  req.body.image_url = req.file.path;
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    resp.status(201).send(savedProduct);
  } catch (error) {
    resp.send(error);
  }
});

// // Upload an image
//    const uploadResult = await cloudinary.uploader
//      .upload(
//          'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//              public_id: 'shoes',
//          }
//      )
//      .catch((error) => {
//          console.log(error);
//      });

//   console.log(uploadResult);

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

    // products.map((ele) => {
    //   ele.image_url = process.env.IMGURL + "products/image/" + ele.image_url;
    // });
    resp.status(200).send(products);
  } catch (error) {
    resp.send(error);
  }
});

router.put("/:id", upload.single("file"), async (req, resp) => {
  const id = req.params.id;
  req.body.image_url = req.file.path;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
    resp.status(201).send(updatedProduct);
  } catch (error) {
    resp.send(error);
  }
});

module.exports = router;
