const express = require('express');
const router = express.Router();

const {
  shopView,
  itemView,
  addItemToCart,
  cartView,
  checkout,
} = require('../controllers/shopControllers');


router.get('/shop', shopView);
router.get('/shop/item/:id', itemView);
router.post('/shop/item/:id/add', addItemToCart);
router.get('/shop/carrito', cartView);
router.post('/shop/carrito', checkout);

module.exports = router;