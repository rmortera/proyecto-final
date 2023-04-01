const ProductInOrderServices = require("../services/productInOrder.service");
const bcrypt = require("bcrypt");

const createProductInOrder = async (req, res) => {
  try {
    const newProductInOrder = req.body;
    const result = await ProductInOrderServices.create(newProductInOrder);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getProductInOrder = async (req, res) => {
  try {
    const getAllProductsInOrder = await ProductInOrderServices.getAll({
      attributes: ["username", "email"],
    });
    res.json(getAllProductsInOrder);
  } catch (error) {
    next(error);
  }
};

module.exports = { createProductInOrder, getProductInOrder };
