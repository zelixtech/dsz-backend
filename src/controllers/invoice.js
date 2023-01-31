const { db } = require('../startup/db')
const moment = require('moment')
const { apiLogger } = require('../startup/logger')

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
      client_id: req.params.client_id,
      invoice_data: JSON.stringify(req.body.data.invoice_data),
    }

    if (isNaN(payload.client_id) || !payload.invoice_data) {
      throw new Error('ValidationError')
    }

    const client = await db.client.findByPk(payload.client_id)

    if (!client) {
      throw new Error('NotFound')
    }

    payload.invoice_financial_year = getFinancialYear()

    const lastInvoice = await db.invoice.findAll({
      where: {
        invoice_financial_year: payload.invoice_financial_year,
      },
      order: [['invoice_number', 'DESC']],
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
      req.body.data.invoice_data[0].sender.name.charAt(0)
    )

    return res.status(200).json({
      error: false,
      data: invoice,
      generatedInvoiceNumber,
    })
  } catch (err) {
    apiLogger.error(`Error: `,{...err})

    if (err.name === 'TypeError' || err.message === 'ValidationError') {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    if (err.message === 'Forbidden') {
      return res.status(403).json({
        error: true,
        errorType: 'Forbidden',
        errorMessage: 'Forbidden Access',
      })
    }

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Client Not Found',
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

const retrieveInvoice = async (req, res) => {
  try {
    const invoice_id = parseInt(req.params.invoice_id)
    if (isNaN(invoice_id)) {
      throw new Error('ValidationError')
    }

    let invoice = await db.invoice.findByPk(invoice_id)
    if (invoice === null) {
      throw new Error('NotFound')
    } else {
      const invoice_data = JSON.parse(invoice.dataValues.invoice_data)
      const generatedInvoiceNumber = buildInvoiceNumber(
        invoice.invoice_number,
        invoice.invoice_financial_year,
        invoice_data.sender.name.charAt(0)
      )

      return res.status(200).json({
        error: false,
        data: invoice,
        generatedInvoiceNumber,
      })
    }
  } catch (err) {
    apiLogger.error(`Error: `,{...err})

    if (err.message === 'TypeError') {
      return res.status(422).json({
        error: true,
        errorMessage: 'Error Caused Due to Incorrect Invoice Data',
        errorType: 'Unprocessable Entity',
      })
    }

    if (err.message === 'ValidationError') {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Invoice Not Found',
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

const retrieveInvoicesOfClient = async (req, res) => {
  try {
    const client_id = parseInt(req.params.client_id)
    if (isNaN(client_id)) {
      throw new Error('ValidationError')
    }

    let invoices = await db.invoice.findAll({
      where: {
        client_id: client_id,
      },
    })

    if (invoices.length === 0) {
      throw new Error('NotFound')
    } else {
      invoices.forEach((invoice, index) => {
        const invoice_data = JSON.parse(invoice.dataValues.invoice_data)

        const generatedInvoiceNumber = buildInvoiceNumber(
          invoice.dataValues.invoice_number,
          invoice.dataValues.invoice_financial_year,
          invoice_data.sender.name.charAt(0)
        )

        invoices[index].dataValues.generatedInvoiceNumber =
          generatedInvoiceNumber
      })

      return res.status(200).json({
        error: false,
        data: invoices,
      })
    }
  } catch (err) {
    apiLogger.error(`Error: `,{...err})

    if (err.message === 'TypeError') {
      return res.status(422).json({
        error: true,
        errorMessage: 'Error Caused Due to Incorrect Invoice Data',
        errorType: 'Unprocessable Entity',
      })
    }

    if (err.message === 'ValidationError') {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Invoices Not Found',
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
  retrieveInvoice,
  retrieveInvoicesOfClient,
}
