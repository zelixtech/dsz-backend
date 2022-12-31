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

function buildQuotationNumber(
  quotation_number,
  quotation_count_no,
  quotation_financial_year,
  empFirstLetter = 'U'
) {
  empFirstLetter = empFirstLetter.toUpperCase()
  return `DSZ${quotation_number}${empFirstLetter}(${quotation_count_no})/20${quotation_financial_year}`
}

const createQuotation = async (req, res) => {
  try {
    const payload = {
      query_id: req.params.query_id,
      quotation_data: JSON.stringify(req.body.data.quotation_data),
    }

    if (isNaN(payload.query_id) || !payload.quotation_data) {
      throw new Error('ValidationError')
    }

    const query = await db.query.findByPk(payload.query_id, {
      include: [
        {
          model: db.client,
          as: 'client',
        },
      ],
    })

    if (!query) {
      throw new Error('NotFound')
    }

    if (query.dataValues.employee_id !== req.session.employee_id) {
      // person creating quotation is not assigned the query
      throw new Error('Forbidden')
    }

    payload.quotation_financial_year = getFinancialYear()

    const lastQuote = await db.quotation.findAll({
      order: [['quotation_number', 'DESC']],
      limit: 1,
    })

    if (lastQuote.length === 0) {
      payload.quotation_number = '0000'
      payload.quotation_count_no = 0
      const quotation = db.quotation.build(payload)
      await quotation.save()

      return res.status(200).json({
        error: false,
        data: quotation,
      })
    }

    const lastQuoteOfClient = await db.quotation.findAll({
      include: [
        {
          model: db.query,
          as: 'query',
          where: {
            client_id: query.dataValues.client_id,
          },
        },
      ],
      order: [['quotation_count_no', 'DESC']],
      limit: 1,
    })

    if (lastQuoteOfClient.length === 0) {
      payload.quotation_count_no = 0
      payload.quotation_number = String(
        parseInt(lastQuote[0].quotation_number) + 1
      ).padStart(4, '0')
    } else {
      payload.quotation_count_no = lastQuoteOfClient[0].quotation_count_no + 1
      payload.quotation_number = lastQuoteOfClient[0].quotation_number
    }

    const quotation = db.quotation.build(payload)
    await quotation.save()

    const generatedQuotationNumber = buildQuotationNumber(
      quotation.quotation_number,
      quotation.quotation_count_no,
      quotation.quotation_financial_year,
      req.body.data.quotation_data[0].sender.name.charAt(0)
    )

    return res.status(200).json({
      error: false,
      data: quotation,
      generatedQuotationNumber,
    })
  } catch (err) {
    console.log(err)

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

const retrieveQuotation = async (req, res) => {
  try {
    const quotation_id = parseInt(req.params.quotation_id)
    if (isNaN(quotation_id)) {
      throw new Error('ValidationError')
    }

    let quotation = await db.quotation.findByPk(quotation_id)
    if (quotation === null) {
      throw new Error('NotFound')
    } else {
      const quotation_data = JSON.parse(quotation.dataValues.quotation_data)
      const generatedQuotationNumber = buildQuotationNumber(
        quotation.quotation_number,
        quotation.quotation_count_no,
        quotation.quotation_financial_year,
        quotation_data[0].sender.name.charAt(0)
      )

      return res.status(200).json({
        error: false,
        data: quotation,
        generatedQuotationNumber,
      })
    }
  } catch (err) {
    console.log(err)

    if (err.message === 'TypeError') {
      return res.status(422).json({
        error: true,
        errorMessage: 'Error Caused Due to Incorrect Quotation Data',
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
        errorMessage: 'Quotation Not Found',
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

const retrieveQuotationsOfQuery = async (req, res) => {
  try {
    const query_id = parseInt(req.params.query_id)
    if (isNaN(query_id)) {
      throw new Error('ValidationError')
    }

    let quotations = await db.quotation.findAll({
      where: {
        query_id: query_id,
      },
    })
    if (quotations.length === 0) {
      throw new Error('NotFound')
    } else {
      quotations.forEach((quotation, index) => {
        const quotation_data = JSON.parse(quotation.dataValues.quotation_data)

        const generatedQuotationNumber = buildQuotationNumber(
          quotation.dataValues.quotation_number,
          quotation.dataValues.quotation_count_no,
          quotation.dataValues.quotation_financial_year,
          quotation_data[0].sender.name.charAt(0)
        )

        quotations[index].dataValues.generatedQuotationNumber =
          generatedQuotationNumber
      })

      return res.status(200).json({
        error: false,
        data: quotations,
      })
    }
  } catch (err) {
    console.log(err)

    if (err.message === 'TypeError') {
      return res.status(422).json({
        error: true,
        errorMessage: 'Error Caused Due to Incorrect Quotation Data',
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
  createQuotation,
  retrieveQuotation,
  retrieveQuotationsOfQuery,
}
