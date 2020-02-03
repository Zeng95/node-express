const express = require('express')
const router = express.Router()

const homePageController = require('../controllers/home')
const productsController = require('../controllers/products')
const cartController = require('../controllers/cart')

// define the home page route
router.get('/', homePageController.getHomePage)

// define the cart route
router.get('/cart', cartController.getCart)

// define the product-list route
router.get('/products', productsController.getProducts)

module.exports = router