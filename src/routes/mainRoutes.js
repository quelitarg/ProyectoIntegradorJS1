const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers');
//const path = require('path');

/* MAIN ROUTES */

router.get('/', mainController.home);
//router.get('/contact', mainController.contact);
router.get('/about', mainController.about);
router.post('/contacto', mainController.contact);

module.exports = router;