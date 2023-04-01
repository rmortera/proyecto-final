const ProductInOrder = require("../models/productInOrder.model");

class ProductInOrderServices {
  static async create(newProductInOrder) {
    try {
      const productInOrderCreated = await Product.create(newProductInOrder);
      return productInOrderCreated;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const getProductInOrder = await ProductInOrder.findAll();
      return getProductInOrder;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductInOrderServices;
