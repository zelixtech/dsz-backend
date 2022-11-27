const { db } = require('../startup/db');
const { Op } = require('sequelize')
const validateVendor = require('../utils/validate');

const createVendor = async (req, res) => {
  try {
    const payload = {
      vendor_name: req.body.vendor.vendor_name,
      vendor_designation: req.body.vendor.vendor_designation,
      vendor_doj: req.body.vendor.vendor_doj,
      vendor_office_email: req.body.vendor.vendor_office_email,
      vendor_email: req.body.vendor.vendor_email,
      vendor_mobile: req.body.vendor.vendor_mobile,
      vendor_dob: req.body.vendor.vendor_dob,
      vendor_address: req.body.vendor.vendor_address,
      vendor_relieve_date: req.body.vendor.vendor_relieve_date,
      vendor_department: req.body.vendor.vendor_department,
      vendor_isAdmin: req.body.vendor.vendor_isAdmin || false,
    }
    const { value, error } = validateVendor(payload);
    if (error) {
      // return { validationError: true }
      console.log(error);
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    var vendorExists = await db.vendor.findOne({
      where: {
        [Op.or]: [
          { vendor_email: payload.vendor_email },
          { vendor_mobile: payload.vendor_mobile },
          { vendor_office_email: payload.vendor_office_email },
        ]
      }
    })
    if (vendorExists) {
      // return { userAlreadyExists: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Employee Aldready Exists",
        error: true,
      })
    }

    const newVendor = db.vendor.build(payload)
    await newVendor.save();
    console.log(newVendor)
    // return { newVendor };
    return res.json({
      error: false,
      data: newVendor
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

const retrieveVendor = async (req, res) => {
  try {
    const vendor_id = parseInt(req.params.vendor_id);
    if (isNaN(vendor_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    let result = await db.vendor.findByPk(vendor_id);
    if (result === null) {
      console.log("not found");
      // return { vendorNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Vendor Do Not Exists",
        error: true,
      })
    }
    else {
      // return { vendor: result }
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
//   retrieveVendor({ Vendor_id: 1 })
// })()



module.exports = { createVendor, retrieveVendor }