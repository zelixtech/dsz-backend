const { productDetails } = require('../Data')
const { db } = require('../startup/db')

// console.log(JSON.stringify(productDetails).length)
const createProductList = async () => {
  try {
    const payload = {
      product_key: 'prodList',
      product_list: JSON.stringify(productDetails),
    }

    const prevList = await db.product.findOne({
      where: {
        product_key: 'prodList',
      },
    })
    if (prevList === null) {
      const productList = db.product.build(payload)
      await productList.save()
    }
  } catch (err) {
    console.log(err)

    if (err.message === 'ValidationError') {
      console.log({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
      return
    }

    console.log({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
    return
  }
}

createProductList()
module.exports = createProductList
