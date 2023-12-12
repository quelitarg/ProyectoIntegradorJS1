const express = require('express');
const router = express.Router();
//const uploadFiles = require('../middlewares/uploadFiles');
const validateInput = require('../middlewares/validator');
const {body}= require ('express-validator')


const controllers = require('../controllers/adminControllers');
const login =[
    body('email')
    .isEmail()
    .withMessage('Necesito que ingrese un correo valido'),
    body('password')
    .isLength({min:6})
    .isAlphanumeric()
    .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y numeros.')
]

router.get('/admin', controllers.adminView);
router.get('/admin/create', controllers.createView);
//router.post('/admin/create', uploadFiles.array('images',2), controllers.createItem);
router.get('/admin/create/bulk', controllers.bulkCreate);
router.get('/admin/edit/:id', controllers.editView);
router.put('/admin/edit/:id', controllers.editItem);
router.delete('/admin/delete/:id', controllers.deleteItem);
router.get('/auth/login', controllers.loginView);
//router.post('/auth/login', loginValidations, validateInput, loginController.loginUser);
router.post('/auth/login', controllers.loginUser);
router.get('/auth/register', controllers.registerView);
router.post('/auth/register', controllers.registerUser);
//router.get('/auth/logout', controllers.logoutView);
module.exports = router;