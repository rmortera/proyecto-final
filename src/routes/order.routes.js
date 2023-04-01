const { Router } = require("express");
const { createOrder, getOrder } = require("../controllers/order.controller");

const router = Router();

router.post("/api/v1/order", createOrder);
router.get("/api/v1/order", getOrder);

module.exports = router;
