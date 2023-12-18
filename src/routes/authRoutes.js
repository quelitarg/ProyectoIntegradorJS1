const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFile');
const validateInput = require('../middlewares/validator');
const loginValidations = require('../middlewares/auth');
const {body}= require ('express-validator');

const controllers = require('../controllers/authControllers');
const loginController = require('../controllers/authControllers');

router.get('/login', controllers.loginView);
router.post('/login', loginController.loginUser);
router.post('/login', controllers.loginUser);
router.get('/register', controllers.registerView);
router.post('/register', controllers.registerUser);
//router.get('/logout', controllers.logoutView);*/

module.exports = router;