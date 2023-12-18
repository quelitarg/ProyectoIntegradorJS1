/*const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers');
//const path = require('path');


router.get('/home', mainController.home);
//router.get('/contact', mainController.contact);
router.get('/about', mainController.about);
router.post('/contacto', mainController.contacto);

module.exports = router;
*/

const express = require('express');
const router = express.Router();

const {
  homeView,
  contactView,
  aboutView,
  faqsView } = require('../controllers/mainControllers');

  /* MAIN ROUTES */
router.get('/', homeView);
router.get('/home', homeView);
router.get('/contact', contactView);
router.get('/about', aboutView);
router.get('/faqs', faqsView);

module.exports = router; 