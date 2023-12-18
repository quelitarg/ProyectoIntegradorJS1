/*const express = require('express');
const router = express.Router();

const {
  shopView,
  itemView,
  addItemToCart,
  cartView,
  checkout,
} = require('../controllers/shopControllers');
const shopController = require('../controllers/shopController.js');

//router.get('/', shopView);
//router.get('/item/:id', shopController.getItem);
//router.post('/item/:id/add', addItemToCart);
router.post('/item/:id/add', shopController.addItemToCart);
//router.get('/carrito', cartView);
//router.post('/carrito', checkout);
router.get('/carrito/', shopController.getCart);
router.delete('/carrito/:id', shopController.deleteCart); // agregado
router.get('/find', shopController.getShopFind); // agregado
router.get('/filter-category/:id', shopController.getShopFilterCategory); // agregado
router.get('/filter-licence/:id', shopController.getShopFilterLicence); // agregado
router.delete('/carrito/:id', shopController.deleteCart); // agregado

module.exports = router;*/
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopControllers.js');

router.get('/', shopController.getShop);
router.get('/find', shopController.getShopFind); // agregado
router.get('/filter-category/:id', shopController.getShopFilterCategory); // agregado
router.get('/filter-licence/:id', shopController.getShopFilterLicence); // agregado
router.get('/item/:id', shopController.getItem);
router.post('/item/:id/add', shopController.addItemToCart);
router.get('/cart/', shopController.getCart);
router.delete('/cart/:id', shopController.deleteCart); // agregado
router.post('/cart/', shopController.postCart);

module.exports = router;