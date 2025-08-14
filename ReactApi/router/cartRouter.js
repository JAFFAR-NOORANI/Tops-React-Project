const router = require("express").Router();
const Cart = require("../model/carts");
const auth = require("../middleware/auth");

router.post("/:pid", auth, async (req, resp) => {
  const pid = req.params.pid;
  const user = req.user;

  try {
    const cart = new Cart({ user: user, product: pid });
    const savedCart = await cart.save();
    resp.status(201).send(savedCart);
  } catch (error) {
    resp.send(error);
  }
});

router.get("/", auth, async (req, resp) => {
  const user = req.user;

  try {
    const cartData = await Cart.find({ user: user._id }).populate([
      "user",
      { path: "product", populate: { path: "category" } },
    ]);
    resp.status(200).send(cartData);
  } catch (error) {
    resp.send(error);
  }
});

module.exports = router;
