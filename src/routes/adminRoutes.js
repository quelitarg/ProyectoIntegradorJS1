const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFile');
const validateInput = require('../middlewares/validator');
const {body}= require ('express-validator');

const controllers = require('../controllers/adminControllers');

router.get('/admin/', controllers.adminView);
router.get('/admin/create', controllers.createView);
router.post('/admin/create', uploadFiles.array('images', 2), controllers.createItem);
router.get('/admin/create/bulk', controllers.bulkCreate);
router.get('/edit/:id', controllers.editView);
router.put('/edit/:id', controllers.editItem);
router.delete('/delete/:id', controllers.deleteItem);

module.exports = router;