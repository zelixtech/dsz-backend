const { db } = require('../startup/db')
const moment = require('moment')

function getFinancialYear() {
  const currentDate = moment()
  const currentYear = parseInt(currentDate.format('YY'))
  const startOfFY = moment('03-31', 'MM-DD')

  if (currentDate.isAfter(startOfFY)) {
    let fin_year = `${currentYear}-${currentYear + 1}`
    return fin_year
  }

  let fin_year = `${currentYear - 1}-${currentYear}`
  return fin_year
}

function buildInvoiceNumber(
  invoice_number,
  invoice_financial_year,
  empFirstLetter = 'U'
) {
  empFirstLetter = empFirstLetter.toUpperCase()
  return `DSZ${invoice_number}${empFirstLetter}/20${invoice_financial_year}`
}

const createInvoice = async (req, res) => {
  try {
    if (!req.body.data) {
      throw new Error('ValidationError')
    }
    const payload = {
      client_id: req.body.data.client.client_id,
      invoice_data: JSON.stringify(req.body.data),
    }

    payload.invoice_financial_year = getFinancialYear()

    const lastInvoice = await db.invoice.findAll({
      order: [['invoice_number', 'DESC']],
      where: {
        client_id: req.body.data.client.client_id,
      },
      limit: 1,
    })

    if (lastInvoice.length === 0) {
      payload.invoice_number = '0001'
    } else {
      payload.invoice_number = String(
        parseInt(lastInvoice[0].invoice_number) + 1
      ).padStart(4, '0')
    }
    const invoice = db.invoice.build(payload)
    await invoice.save()

    const generatedInvoiceNumber = buildInvoiceNumber(
      invoice.invoice_number,
      invoice.invoice_financial_year,
      req.body.data.client.client_name.charAt(0)
    )

    return res.status(200).json({
      error: false,
      data: invoice,
      generatedInvoiceNumber,
    })
  } catch (err) {
    console.log(err, 101)

    if (err.name === 'TypeError' || err.message === 'ValidationError') {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    if (err.name === 'Forbidden') {
      return res.status(403).json({
        error: true,
        errorType: 'Forbidden',
        errorMessage: 'Forbidden Access',
      })
    }

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Query Not Found',
        error: true,
      })
    }

    return res.status(500).json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

module.exports = {
  createInvoice,
}
