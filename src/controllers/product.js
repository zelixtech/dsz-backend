const { db } = require('../startup/db')

const appendProduct = async (req, res) => {
  try {
    const payload = {
      newProducts: req.body.data.newProducts,
      productName: req.body.data.productName,
    }

    const productList = await db.product.findOne({
      where: {
        product_key: 'prodList',
      },
    })

    const newProductList = JSON.parse(productList.dataValues.product_list)
    newProductList[0][payload.productName] = payload.newProducts
    await productList.update({
      product_list: JSON.stringify(newProductList),
    })

    return res.status(200).json({
      error: false,
      data: productList,
    })
  } catch (err) {
    console.log(err)

    return res.status(500).json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const retrieveProductList = async (req, res) => {
  try {
    const productList = await db.product.findOne({
      where: {
        product_key: 'prodList',
      },
    })

    return res.status(200).json({
      error: false,
      data: productList,
    })
  } catch (err) {
    console.log(err)

    return res.status(500).json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const deleteProductFromList = async (req, res) => {
  try {
    const payload = {
      productName: req.body.data.productName,
    }

    const productList = await db.product.findOne({
      where: {
        product_key: 'prodList',
      },
    })

    const newProductList = JSON.parse(productList.dataValues.product_list)

    delete newProductList[0][payload.productName]

    await productList.update({
      product_list: JSON.stringify(newProductList),
    })

    return res.status(200).json({
      error: false,
      data: productList,
    })
  } catch (err) {
    console.log(err)

    return res.status(500).json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

module.exports = { retrieveProductList, appendProduct, deleteProductFromList }
