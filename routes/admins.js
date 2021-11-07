const express = require('express')
const router = express.Router();
const productController  = require('../controllers/products')

router.get('/add-product',productController.getProducts)

router.post('/add-product',productController.postAddProducts)

module.exports = router