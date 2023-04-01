const { Router } = require("express");
const {
  createProduct,
  getProduct,
  editProductDescription,
} = require("../controllers/product.controller");

const router = Router();

router.post("/api/v1/products", createProduct);
router.get("/api/v1/products", getProduct);
router.put("/api/v1/products/:id", editProductDescription);

module.exports = router;
