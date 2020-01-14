const express = require('express')
const router = express.Router()

const adminData = require('./admin')

router.get('/', (req, res) => {
  const products = adminData.products

  res.render('shop', {
    products,
    pageTitle: 'Shop',
    // productCSS: true,
    // activeShop: true,
    // hasProducts: products.length > 0,
    // path: '/'
  })
})

module.exports = router