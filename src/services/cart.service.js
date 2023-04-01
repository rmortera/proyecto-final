const Cart = require("../models/product.model");
const Users = require("../models/user.model");

class CartServices {
  static async create(newCart) {
    try {
      const cartCreated = await Cart.create(newCart);
      return cartCreated;
    } catch (error) {
      throw error;
    }
  }

  static async addProduct(newProductToCart) {
    try {
      const productAdded = await Cart.create(newProductToCart);
      return productAdded;
    } catch (error) {
      throw error;
    }
  }

  static async productInCart(cartId) {
    try {
      const result = await Cart.findByPk(cartId);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;
