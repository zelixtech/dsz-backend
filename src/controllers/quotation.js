const { db } = require('../startup/db');
const { Op } = require('sequelize')
const validateQuotation = require('../utils/validate');

const createQuotation = async (req, res) => {
  try {
    const payload = {
      quotation_number: req.body.data.quotation_number,
      client_id: req.body.data.client_id,
      employee_id: req.body.data.employee_id,
      query_id: req.body.data.query_id,
      order_id: req.body.data.order_id,
      quotation_terms: req.body.data.quotation_terms,
      quotation_total_no_of_products: req.body.data.quotation_total_no_of_products,
      quotation_total_quantity: req.body.data.quotation_total_quantity,
      quotation_total_amount: req.body.data.quotation_total_amount,
      quotation_date: req.body.data.quotation_date,
      quotation_currency: req.body.data.quotation_currency,
    }
    const { value, error } = validateQuotation(payload);
    if (error) {
      // return { validationError: true }
      console.log(error);
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    var quotationExists = await db.quotation.findOne({
      where: {
        [Op.or]: [
          { quotation_email: payload.quotation_email },
          { quotation_mobile: payload.quotation_mobile },
          { quotation_office_email: payload.quotation_office_email },
        ]
      }
    })
    if (quotationExists) {
      // return { userAlreadyExists: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Quotation Aldready Exists",
        error: true,
      })
    }

    const newQuotation = db.quotation.build(payload)
    await newQuotation.save();
    console.log(newQuotation)
    // return { newQuotation };
    return res.json({
      error: false,
      data: newQuotation
    })
  }
  catch (err) {
    console.log(err);
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: "Internal Server Error",
      error: true,
    })
  }
}

const retrieveQuotation = async (req, res) => {
  try {
    const quotation_id = parseInt(req.params.quotation_id);
    if (isNaN(quotation_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    let result = await db.quotation.findByPk(quotation_id);
    if (result === null) {
      console.log("not found");
      // return { quotationNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Quotation Do Not Exists",
        error: true,
      })
    }
    else {
      // return { quotation: result }
      return res.json({
        error: false,
        data: result
      })
    }
  }
  catch (err) {
    console.log(err);
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: "Internal Server Error",
      error: true,
    })
  }
}

// (async () => {
//   retrieveQuotation({ quotation_id: 1 })
// })()



module.exports = { createQuotation, retrieveQuotation }