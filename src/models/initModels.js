const Users = require("./user.model");
const Product = require("./product.model");
const Order = require("./order.model");
const Cart = require("./cart.model");
const ProductInOrder = require("./productInOrder.model");

const initModels = () => {
  Users.hasMany(Product, {
    foreignKey: "user_id",
  });
  Product.belongsTo(Users, {
    foreignKey: "user_id",
  });

  Users.hasOne(Cart, {
    foreignKey: "user_id",
  });
  Cart.belongsTo(Users, {
    foreignKey: "user_id",
  });

  Users.hasMany(Order, {
    foreignKey: "user_id",
  });
  Order.belongsTo(Users, {
    foreignKey: "user_id",
  });

  Order.hasMany(ProductInOrder, {
    foreignKey: "order_id",
  });
  ProductInOrder.hasMany(Product, {
    foreignKey: "product_id",
  });
  ProductInOrder.belongsTo(Order, {
    foreignKey: "order_id",
  });
};

module.exports = initModels;
