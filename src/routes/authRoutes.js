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
router.get('/logout', (req,res) => res.send(' page logout '));

module.exports = router;

/*const express= require('express')
const router = express.Router()
const authControllers = require('../../controllers/authController')

router.get('/login', authControllers.login)
router.post('/login',(req,res) => res.send(' page login '))
router.get('/register',authControllers.register)
router.post('/register',(req,res) => res.send(' page register post '))
router.get('/logout',(req,res) => res.send(' page logout '))

module.exports = router*/