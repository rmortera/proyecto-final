const UsersServices = require("../services/user.service");
const Users = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const getAllUsers = await UsersServices.getAll({
      attributes: ["username", "email"],
    });
    res.json(getAllUsers);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUserData = req.body;
    const userUpdated = await UsersServices.update(id, updatedUserData);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.destroy({
      where: { id },
    });
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, getUsers, updateUser, deleteUsers };
