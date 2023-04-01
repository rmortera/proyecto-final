const { Router } = require("express");
const {
  createCart,
  addProductToCart,
  getProductInCart,
} = require("../controllers/cart.controller");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/api/v1/cart", createCart);
router.post("/api/v1/cart/:cartId", addProductToCart);
router.get("/api/v1/cart/:cartId", authenticate, getProductInCart);

module.exports = router;
