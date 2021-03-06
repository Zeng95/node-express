const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin')

// /admin/products => GET
router.get('/products', adminController.getProducts)

// /admin/edit-product => GET
router.get('/edit-product', adminController.getEditProduct)

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct)

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct)

module.exports = router
