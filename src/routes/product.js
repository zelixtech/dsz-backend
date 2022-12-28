require('dotenv').config()
const express = require('express')
const router = express.Router()

const { productController } = require('../controllers/')

router.post('/', productController.appendProduct)
router.get('/product_list', productController.retrieveProductList)
router.patch('/delete_product', productController.deleteProductFromList)

module.exports = router
