const { db } = require('../startup/db');
const { Op } = require('sequelize')
const validateQuotation = require('../utils/validate');


// const quotation = async (req, res) => {
//   try {
//     const payload = {
//       query_id: req.body.data.query_id,
//       employee_id: req.body.data.employee_id,
//       product_list: req.body.data.product_list,

//     }
//     product_list = [{
//       "name": "coat",

//     }]
//     const { product_list }
//   }
//   catch (err) {
//     console.log(err);
//     res.send('error');
//   }
// }

const createQuotation = async (req, res) => {
  try {
    // Does Query Exists?
    // Does Employee Sending Quotation and  Employee Assigned the QUery Same?


    const payload = {
      query_id: req.params.query_id,
      quotation_terms: req.body.data.quotation_terms,
      quotation_currency: req.body.data.quotation_currency,
    }

    if (isNaN(payload.query_id) || !req.body.products || !req.body.rproducts) {
      // validation error
      return;
    }
    const query = await db.query.findByPk(payload.query_id, {
      include: [{
        model: db.client,
        as: "client"
      }]
    });
    if (!query) {
      // query for which quotation is being created dne
      return;
    }
    if (query.dataValues.employee_id !== payload.employee_id) {
      // person creating quotation is not assigned the query
      return;
    }

    // check products are valid or not?
    // const productArray = [];
    // for (product in req.body.products) {
    //   const productPayload = {
    //     quotation_id: Joi.number().required(),
    //     product_isRecommendation: Joi.boolean(),
    //     product_selling_rate: Joi.number().required(),
    //     product_quantity: Joi.number().required()
    //   }
    // } 


    /*
    data[0].products.forEach((d, i) => {
      const prod = {
        id: i + 1,
        description: d.name,
        data: d.data[0],
        quantity: d.quantity,
        thikness: d.thikness,
        rate: d.rate.toLocaleString('en-IN', {
          style: 'currency',
          currency: 'INR'
        }),
        unit: d.unit,
        total: d.quantity * d.rate,
        subtotal: (d.quantity * d.rate).toLocaleString('en-IN', {
          style: 'currency',
          currency: 'INR'
        })
      }
      array.push(prod);
    });
    */

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