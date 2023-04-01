const Users = require("../models/user.model");

class UsersServices {
  static async getUser(email) {
    try {
      const user = await Users.findOne({
        where: { email },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async create(newUser) {
    try {
      const userCreated = await Users.create(newUser);
      return userCreated;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, updatedUserData) {
    try {
      const updateUser = await Users.update(updatedUserData, {
        where: { id },
      });
      return updateUser;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const getUsers = await Users.findAll();
      return getUsers;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;
