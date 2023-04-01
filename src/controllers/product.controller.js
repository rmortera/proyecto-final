const ProductServices = require("../services/product.service");

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const result = await ProductServices.create(newProduct);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const getAllProducts = await ProductServices.getAll();
    res.json(getAllProducts);
  } catch (error) {
    next(error);
  }
};

const editProductDescription = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    await ProductServices.update(newData, id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { createProduct, getProduct, editProductDescription };
