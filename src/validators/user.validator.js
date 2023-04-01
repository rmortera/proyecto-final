const { check, validationResult, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createUserValidator = [
  check("username", "Error con el campo username.")
    .exists()
    .withMessage("El username debe existir.")
    .notEmpty()
    .withMessage("El username no debe estar vacío.")
    .isString()
    .withMessage("El username debe ser un string.")
    .isLength({ min: 6, max: 30 })
    .withMessage("El username debe tener entre 6 y 30 caracteres."),
  check("email", "Error con el email.")
    .exists()
    .withMessage("No se encontró la propiedad email.")
    .notEmpty()
    .withMessage("No se encontró un valor para el email.")
    .isEmail()
    .withMessage("El email no tiene un formato correcto.")
    .isString()
    .isLength({ min: 7, max: 50 })
    .withMessage("El email debe tener entre 7 y 50 caracteres."),
  check("password", "Error con la contraseña")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 7 }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  createUserValidator,
};
