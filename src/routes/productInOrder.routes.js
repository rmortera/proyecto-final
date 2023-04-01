const { Router } = require("express");
const {
  createProductInOrder,
  getProductInOrder,
} = require("../controllers/productInOrder.controller");

const router = Router();

router.post("/api/v1/productsinorder", createProductInOrder);
router.get("/api/v1/productsinorder", getProductInOrder);

module.exports = router;
