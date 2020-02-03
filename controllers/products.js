const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      pageTitle: 'Products',
      products
    })
  })
}

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      pageTitle: 'Admin Products',
      products
    })
  })
}

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
  })
}

exports.postAddProduct = (req, res, next) => {
  const { title, price } = req.body
  const product = new Product(title, price)

  product.store()
  res.redirect(302, '/')
}