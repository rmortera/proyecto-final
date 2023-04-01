const CartServices = require("../services/cart.service");
const Cart = require("../models/cart.model");

const createCart = async (req, res) => {
  try {
    const newCart = req.body;
    const result = await CartServices.create(newCart);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const addProductToCart = async (req, res) => {
  try {
    const newProductToCart = req.body;
    const result = await CartServices.addProduct(newProductToCart);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getProductInCart = async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const productsInCart = await CartServices.productInCart(cartId);
    res.json(productsInCart);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createCart,
  addProductToCart,
  getProductInCart,
};
