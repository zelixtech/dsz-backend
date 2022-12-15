const fs = require('fs')
const pdf = require('pdf-creator-node')
const path = require('path')
// const options = require('../helpers/options');
// const data = require('../helpers/data');
var converter = require('number-to-words')

let count = 000001

const generatePdf = async (req, res) => {
  const data = req.body

  console.log(req.body)

  const html = fs.readFileSync(
    path.join(__dirname, '../views/template.html'),
    'utf-8'
  )

  const filename = 'DSZ' + count + '.pdf'

  count++

  let array = []
  let rarray = []
  let TACList = []

  // console.log(data[0].products);

  let details = data[0]

  data[0].products.forEach((d, i) => {
    const prod = {
      id: i + 1,
      description: d.name,
      data: d.data[0],
      quantity: d.quantity,
      thikness: d.thikness,
      rate: d.rate.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
      }),
      unit: d.unit,
      total: d.quantity * d.rate,
      subtotal: (d.quantity * d.rate).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
      }),
    }
    array.push(prod)
  })

  data[0].rproducts.forEach((d, i) => {
    const rprod = {
      id: i + 1,
      description: d.name,
      data: d.data[0],
      quantity: d.quantity,
      thikness: d.thikness,
      rate: d.rate.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
      }),
      unit: d.unit,
      total: d.quantity * d.rate,
      subtotal: (d.quantity * d.rate).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
      }),
    }
    rarray.push(rprod)
  })

  const TACarray = details.TAC.split(/\r?\n/)

  TACarray.forEach((d) => {
    const tacdata = {
      data: d,
    }

    TACList.push(tacdata)
  })

  let subtotal = 0
  array.forEach((i) => {
    subtotal += i.total
  })

  let tax = (subtotal * 18) / 100
  let grandtotal = subtotal + tax

  const inword = converter.toWords(grandtotal)

  grandtotal = grandtotal.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
  })

  tax = tax.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
  })

  const obj = {
    prodlist: array,
    rprodlist: rarray,
    subtotal: subtotal,
    tax: tax,
    gtotal: grandtotal,
    gtotalInword: inword,
    sender: details.sender,
    client: details.client,
    IsRP: details.isRP,
    IsTAC: details.isTAC,
    TAC: TACList,
  }

  var options = {
    format: 'A3',
    orientation: 'portrait',
    border: '10mm',
  }

  var document = {
    html: html,
    data: {
      products: obj,
    },
    path: './docs/' + filename,
    type: '', // "stream" || "buffer" || "" ("" defaults to pdf)
  }

  await pdf
    .create(document, options)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.error(error)
    })

  const filepath = 'http://localhost:8000/docs/' + filename

  var options = {
    root: 'D:\\zelixprojects\\node-quotation-generator\\docs',
  }

  var qoutation = fs.readFileSync(
    'D:\\zelixprojects\\node-quotation-generator\\docs\\' + filename
  )
  res.contentType('application/pdf')
  res.send(qoutation)
}

module.exports = {
  generatePdf,
}
