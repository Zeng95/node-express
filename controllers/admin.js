const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      pageTitle: 'Admin Products',
      products
    })
  })
}

exports.getEditProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Edit Product',
  })
}

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
  })
}

exports.postAddProduct = (req, res, next) => {
  const { title, price, imageUrl, description } = req.body
  const product = new Product(title, description, imageUrl, price)

  product.store()
  res.redirect(302, '/')
}