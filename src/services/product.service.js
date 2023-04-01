const Product = require("../models/product.model");

class ProductServices {
  static async create(newProduct) {
    try {
      const productCreated = await Product.create(newProduct);
      return productCreated;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const getProduct = await Product.findAll();
      return getProduct;
    } catch (error) {
      throw error;
    }
  }

  static async update(newData, id) {
    try {
      const result = await Product.update(newData, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
