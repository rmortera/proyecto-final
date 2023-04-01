const { Router } = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUsers,
} = require("../controllers/user.controller");

const { createUserValidator } = require("../validators/user.validator");

const router = Router();

router.post("/api/v1/users", createUserValidator, createUser);
router.get("/api/v1/users", getUsers);
router.put("/api/v1/users/:id", updateUser);
router.delete("/api/v1/users/:id", deleteUsers);

module.exports = router;
