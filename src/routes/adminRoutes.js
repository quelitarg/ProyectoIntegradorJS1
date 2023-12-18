const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFile');
const validateInput = require('../middlewares/validator');
const {body}= require ('express-validator')

const controllers = require('../controllers/adminControllers');
const adminControllers = require('../controllers/adminControllers');


//router.get('/create', adminControllers.create)
//router.get('/save', uploadFiles.single('images'), controllers.save);
  
  

router.get('/', controllers.adminView);
router.get('/create', controllers.createView);
router.post('/create', uploadFiles.array('images', 2), controllers.createItem);
router.get('/create/bulk', controllers.bulkCreate);
router.get('/edit/:id', controllers.editView);
router.put('/edit/:id', controllers.editItem);
router.delete('/delete/:id', controllers.deleteItem);

module.exports = router;