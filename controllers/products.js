const Product = require('../models/product')

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      pageTitle: 'Shop',
      path: '/',
      products
    })
  })
}

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product'
  })
}

exports.postAddProduct = (req, res, next) => {
  const { title, price } = req.body
  const product = new Product(title, price)

  product.store()
  res.redirect(302, '/')
}