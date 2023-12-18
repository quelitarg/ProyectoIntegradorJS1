const { body } = require('express-validator');
//const validateInput = require('../middlewares/validator');

const loginValidations = [
    body('email')
    .isEmail()
    .withMessage('Necesito que ingrese un correo valido'),
    body('password')
    .isLength({min:6})
    .isAlphanumeric()
    .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y numeros.')
]

module.exports = loginValidations;