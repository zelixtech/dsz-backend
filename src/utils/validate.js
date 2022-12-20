const Joi = require('joi').extend(require('@joi/date'))

const validateEmployee = (employee) => {
  const employeeSchema = Joi.object({
    employee_name: Joi.string().min(3).max(255).required(),
    employee_password: Joi.string().min(3).max(255).required(),
    employee_designation: Joi.string().min(3).max(255).required(),
    employee_dob: Joi.date().format('YYYY-MM-DD').required(),
    employee_doj: Joi.date()
      .format('YYYY-MM-DD')
      .min(Joi.ref('employee_dob'))
      .required(),
    employee_relieve_date: Joi.date()
      .format('YYYY-MM-DD')
      .min(Joi.ref('employee_doj')),
    employee_mobile: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    employee_office_email: Joi.string().email().min(3).max(320).required(),
    employee_email: Joi.string().email().min(3).max(320).required(),
    employee_address: Joi.string().min(3).max(255).required(),
    employee_department: Joi.string().min(1).max(255).required(),
    employee_isAdmin: Joi.boolean(),
    employee_isHR: Joi.boolean(),
  })

  return employeeSchema.validate(employee)
}

const validateEmpExists = (employee) => {
  const employeeSchema = Joi.object({
    employee_mobile: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    employee_office_email: Joi.string().email().min(3).max(320).required(),
    employee_email: Joi.string().email().min(3).max(320).required(),
  })

  return employeeSchema.validate(employee)
}

const validateClientExists = (client) => {
  const clientSchema = Joi.object({
    client_mobile: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    client_email: Joi.string().email().min(3).max(320).required(),
  })

  return clientSchema.validate(client)
}

const validateClient = (client) => {
  const clientSchema = Joi.object({
    client_email: Joi.string().email().min(3).max(320).required(),
    client_name: Joi.string().min(3).max(255).required(),
    client_mobile: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    client_address: Joi.string().min(3).max(255).required(),
    client_city: Joi.string().min(1).max(255).required(),
    client_industry: Joi.string().min(1).max(255).required(),
    client_blocked: Joi.boolean(),
  })

  return clientSchema.validate(client)
}

// const validateQuotation = (quotation) => {
//   const quotationSchema = Joi.object({
//     quotation_number: Joi.string().min(8).max(12).required(),
//     client_id: Joi.number().required(),
//     employee_id: Joi.number().required(),
//     query_id: Joi.number().required(),
//     order_id: Joi.number().required(),
//     quotation_terms: Joi.string().max(1024),
//     quotation_total_no_of_products: Joi.number().required(),
//     quotation_total_quantity: Joi.number().required(),
//     quotation_total_amount: Joi.number().required(),
//     quotation_date: Joi.date().format('YYYY-MM-DD').required(),
//     quotation_currency: Joi.string().length(3),
//   })

//   return quotationSchema.validate(quotation);
// }

const validateQuotation = (quotation) => {
  const quotationSchema = Joi.object({
    // quotation_number: Joi.string().min(8).max(12).required(),
    query_id: Joi.number().required(),
    quotation_terms: Joi.string().max(1024),
    quotation_currency: Joi.string().length(3).valid('INR', 'USD'),
  })

  return quotationSchema.validate(quotation)
}

// const validateAttendance = (attendance) => {
//   const attendanceSchema = Joi.object({
//     employee_id: Joi.number().required(),
//     attendance_status: Joi.string().min(3).max(10).required(),
//   })

//   return attendanceSchema.validate(attendance);
// }

const validateBankInfo = (bank_info) => {
  const bankInfoSchema = Joi.object({
    employee_id: Joi.number().required(),
    bank_info_name: Joi.string().min(3).max(255).required(),
    bank_info_ifsc_code: Joi.string().length(11).required(),
    bank_info_branch_name: Joi.string().min(3).max(255).required(),
    employee_name_as_in_bank: Joi.string().min(3).max(255).required(),
  })

  return bankInfoSchema.validate(bank_info)
}

//checks
const validateEmployeeLogin = (employeeLogin) => {
  const employeeLoginSchema = Joi.object({
    employee_id: Joi.number(),
    employee_login_time: Joi.string().min(3).max(20).required(),
    employee_login_date: Joi.string().min(3).max(255).required(),
  })

  return employeeLoginSchema.validate(employeeLogin)
}

const validateFollowup = (followup) => {
  const followupSchema = Joi.object({
    // client_id: Joi.number().required(),
    // employee_id: Joi.number().required(),
    query_id: Joi.number().required(),
    // order_id: Joi.number().required(),
    followup_text: Joi.string().min(1).max(255).required(),
  })

  return followupSchema.validate(followup)
}

const validateOrder = (order) => {
  const orderSchema = Joi.object({
    client_id: Joi.number().required(),
    employee_id: Joi.number().required(),
    query_id: Joi.number().required(),
  })

  return orderSchema.validate(order)
}

const validateProduct = (product) => {
  const productSchema = Joi.object({
    quotation_id: Joi.number().required(),
    product_isRecommendation: Joi.boolean(),
    product_selling_rate: Joi.number().required(),
    product_quantity: Joi.number().required(),
  })

  return productSchema.validate(product)
}

const validateQuery = (query) => {
  const querySchema = Joi.object({
    client_id: Joi.number().required(),
    employee_id: Joi.number(),
    query_source: Joi.string().min(3).max(255).required(),
    query_create_time: Joi.date().required(),
    query_subject: Joi.string().min(3).max(255).required(),
    query_product: Joi.string().min(3).max(255).required(),
    query_message: Joi.string().min(3).max(1024).required(),
    query_state: Joi.string().min(3).max(255).required(),
  })

  return querySchema.validate(query)
}

const validateQueryStatus = (query) => {
  const querySchema = Joi.object({
    query_id: Joi.number().required(),
    query_state: Joi.string().min(3).max(255).required(),
  })

  return querySchema.validate(query)
}

const validateVendor = (vendor) => {
  const vendorSchema = Joi.object({
    purchase_order_id: Joi.number().required(),
    vendor_name: Joi.string().min(3).max(255).required(),
    vendor_rate: Joi.number().required(),
    vendor_product_name: Joi.string().min(3).max(255).required(),
  })

  return vendorSchema.validate(vendor)
}

const validatePurchaseOrder = (purchaseOrder) => {
  const purchaseOrderSchema = Joi.object({
    product_name: Joi.string().min(3).max(255).required(),
    purchased_from_vendor_id: Joi.number(),
    invoice_number: Joi.string().min(1).max(100),
    payment_status: Joi.string().min(1).max(100).required(),
  })

  return purchaseOrderSchema.validate(purchaseOrder)
}

const validateDate = (date) => {
  // return Joi.attempt(date, Joi.date().format('YYYY-MM-DD'));
  return Joi.date().format('YYYY-MM-DD').required().validate(date)
}

const validateFollowupText = (followup) => {
  const schema = Joi.object({
    followup_id: Joi.number().required(),
    followup_text: Joi.string().min(1).max(255).required(),
  })
  return schema.validate(followup)
}

const validateLogin = (login) => {
  const schema = Joi.object({
    email: Joi.string().email().min(3).max(320).required(),
    password: Joi.string().min(8).max(15).required(),
  })

  return schema.validate(login)
}

const validateEmpQueryWithStatus = (query) => {
  const schema = Joi.object({
    query_state: Joi.string().min(3).max(10).required(),
    employee_id: Joi.number().required(),
  })

  return schema.validate(query)
}

// (() => {
//   try {
//     console.log(validateDate('1999-12-20'));
//     const { error } = validateDate('1999-15-20');
//     if (error) {
//       console.log('jhi');
//     }
//     else {
//       console.log('ff')
//     }
//   }
//   catch (err) {
//     console.log(err);
//     console.log('er');
//   }
// })();

// (() => {
//   const time = Joi.date().timestamp('javascript').validate(1669558022);
//   console.log(time);
//   console.log(Joi.date().timestamp('javascript').validate(900000000));
//   console.log(Joi.date().timestamp('unix').validate(900000000));
//   console.log(Joi.date().timestamp('unix').validate(1669558022));
// })()

module.exports = {
  // validateAttendance,
  validateBankInfo,
  validateClient,
  validateEmployeeLogin,
  validateEmployee,
  validateEmpExists,
  validateClientExists,
  validateFollowup,
  validateOrder,
  validateProduct,
  validatePurchaseOrder,
  validateQuery,
  validateQuotation,
  validateVendor,
  validateDate,
  validateFollowupText,
  validateLogin,
  validateQueryStatus,
  validateEmpQueryWithStatus,
}
