const Order = require("../models/product.model");

class OrderServices {
  static async create(newOrder) {
    try {
      const orderCreated = await Cart.create(newOrder);
      return orderCreated;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const getOrder = await Order.findAll();
      return getOrder;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
