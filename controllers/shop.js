const Product = require('../models/product')

exports.getHomepage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      pageTitle: 'Shop',
      products
    })
  })
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      pageTitle: 'All Products',
      products
    })
  })
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart'
  })
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Your Checkout'
  })
}