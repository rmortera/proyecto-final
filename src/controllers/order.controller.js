const OrderServices = require("../services/order.service");
const bcrypt = require("bcrypt");

const createOrder = async (req, res) => {
  try {
    const newOrder = req.body;
    const result = await OrderServices.create(newOrder);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res) => {
  try {
    const getTotalOrder = await OrderServices.getAll({
      attributes: ["username", "email"],
    });
    res.json(getTotalOrder);
  } catch (error) {
    next(error);
  }
};

module.exports = { createOrder, getOrder };
