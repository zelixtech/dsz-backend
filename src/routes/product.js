require('dotenv').config()
const express = require('express')
const router = express.Router()
const {
  allowEmployee,
  allowAdmin,
  allowHR,
  allowBothAdminAndHR,
} = require('../middlewares')

const { productController } = require('../controllers/')

router.post('/', allowAdmin, productController.appendProduct)

router.get(
  '/product_list',
  allowEmployee,
  productController.retrieveProductList
)

router.patch(
  '/delete_product',
  allowAdmin,
  productController.deleteProductFromList
)

module.exports = router
