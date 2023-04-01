const UsersServices = require("../services/user.service");
const AuthService = require("../services/auth.service");
const bcrypt = require("bcrypt");

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UsersServices.getUser(email);
    if (!user) {
      return next({
        status: 400,
        message: "Invalid email",
        error: "User not found",
      });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return next({
        status: 400,
        message: "Password does not match with email user",
        error: "Invalid password",
      });
    }
    const { id, username } = user;
    const token = AuthService.genToken({ id, username });
    res.json({ id, username, email, token });
  } catch (error) {
    next(error);
  }
};

module.exports = { userLogin };
