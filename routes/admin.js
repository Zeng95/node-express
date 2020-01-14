const express = require('express')
const router = express.Router()

const products = []

// /admin/add-product => GET
router.get('/add-product', (req, res) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    isProductRoute: true,
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
    // path: '/admin/add-product'
  })
})

// /admin/product => POST
router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title })
  res.redirect(302, '/')
})

exports.routes = router
exports.products = products
// module.exports = router
