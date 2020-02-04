const express = require('express')
const router = express.Router()

const shopController = require('../controllers/shop')

// define the home page route
router.get('/', shopController.getHomepage)

// define the cart route
router.get('/cart', shopController.getCart)

// define the products route
router.get('/products', shopController.getProducts)

// define the checkout route
router.get('/checkout', shopController.getCheckout)

// define the checkout route
router.get('/orders', shopController.getOrders)

module.exports = router