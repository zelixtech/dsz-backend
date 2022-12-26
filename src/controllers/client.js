const { db } = require('../startup/db')
const { Op } = require('sequelize')
const { validateClient, validateClientExists } = require('../utils/validate')

const createClient = async (req, res) => {
  try {
    // const data = req.body;
    const payload = {
      client_email: req.body.data.client_email,
      client_name: req.body.data.client_name,
      client_mobile: req.body.data.client_mobile,
      client_shipping_address: req.body.data.client_shipping_address,
      client_billing_address: req.body.data.client_billing_address,
      client_city: req.body.data.client_city,
      client_state: req.body.data.client_state,
      client_country_iso: req.body.data.client_country_iso,
      client_gst_no: req.body.data.client_gst_no,
      client_company_name: req.body.data.client_company_name,
      client_blocked: req.body.data.client_blocked,
      client_alternate_email: req.body.data.client_alternate_email,
      client_alternate_mobile: req.body.data.client_alternate_mobile,
    }
    const { error } = validateClient(payload)
    if (error) {
      // return { validationError: true }
      console.log(error)

      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    var clientExists = await db.client.findOne({
      where: {
        [Op.or]: [
          { client_email: payload.client_email },
          { client_mobile: payload.client_mobile },
        ],
      },
    })
    if (clientExists) {
      // return { clientAlreadyExists: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Client Already Exists',
        error: true,
      })
    }

    const newClient = db.client.build(payload)
    await newClient.save()
    console.log(newClient)
    return res.json({
      error: false,
      data: newClient,
    })
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const retrieveClient = async (req, res) => {
  try {
    const client_id = parseInt(req.params.client_id)
    if (isNaN(client_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    let result = await db.client.findByPk(client_id)
    if (result === null) {
      console.log('not found')
      // return { clientNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Client Do Not Exists',
        error: true,
      })
    } else {
      // return { client: result }
      return res.json({
        error: false,
        data: result,
      })
    }
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const updateClient = async (req, res) => {
  try {
    const payload = {
      client_email: req.body.data.client_email,
      client_name: req.body.data.client_name,
      client_mobile: req.body.data.client_mobile,
      client_shipping_address: req.body.data.client_shipping_address,
      client_billing_address: req.body.data.client_billing_address,
      client_city: req.body.data.client_city,
      client_state: req.body.data.client_state,
      client_country_iso: req.body.data.client_country_iso,
      client_gst_no: req.body.data.client_gst_no,
      client_company_name: req.body.data.client_company_name,
      client_blocked: req.body.data.client_blocked,
      client_alternate_email: req.body.data.client_alternate_email,
      client_alternate_mobile: req.body.data.client_alternate_mobile,
    }
    const { error } = validateClient(payload)

    const client_id = parseInt(req.params.client_id)
    if (error || isNaN(client_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    let result = await db.client.findByPk(client_id)
    if (result === null) {
      console.log('not found')
      // return { clientNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Client Do Not Exists',
        error: true,
      })
    } else {
      await result.update({
        client_email: payload.client_email,
        client_name: payload.client_name,
        client_mobile: payload.client_mobile,
        client_shipping_address: payload.client_shipping_address,
        client_billing_address: payload.client_billing_address,
        client_city: payload.client_city,
        client_state: payload.client_state,
        client_country_iso: payload.client_country_iso,
        client_gst_no: payload.client_gst_no,
        client_company_name: payload.client_company_name,
        client_blocked: payload.client_blocked,
        client_alternate_email: payload.client_alternate_email,
        client_alternate_mobile: payload.client_alternate_mobile,
      })
      res.json({
        message: 'hello',
        result,
      })
    }
  } catch (err) {
    console.log(err)
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Unique Field Required',
        error: true,
      })
    } else {
      return res.json({
        errorType: 'Server Error',
        errorMessage: 'Internal Server Error',
        error: true,
      })
    }
    // return { dbError: true };
  }
}

const blockClient = async (req, res) => {
  try {
    const client_id = parseInt(req.params.client_id)

    if (isNaN(client_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    let result = await db.client.findByPk(client_id)
    if (result === null) {
      console.log('not found')
      // return { clientNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Client Do Not Exists',
        error: true,
      })
    } else {
      // return { client: result }
      await result.update({
        client_blocked: true,
      })
      return res.json({
        error: false,
        data: result,
      })
    }
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const unblockClient = async (req, res) => {
  try {
    const client_id = parseInt(req.params.client_id)

    if (isNaN(client_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    let result = await db.client.findByPk(client_id)
    if (result === null) {
      console.log('not found')
      // return { clientNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Client Do Not Exists',
        error: true,
      })
    } else {
      // return { client: result }
      await result.update({
        client_blocked: false,
      })
      return res.json({
        error: false,
        data: result,
      })
    }
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const retrieveAllActiveClients = async (req, res) => {
  try {
    let result = await db.client.findAll({
      where: {
        client_blocked: 0,
      },
    })
    return res.json({
      error: false,
      data: result,
    })
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const retrieveAllActiveClientsInGivenTime = async (req, res) => {
  try {
    const payload = {
      start_time: req.query.start_time,
      end_time: req.query.end_time,
    }

    let result = await db.client.findAll({
      where: {
        client_blocked: 0,
        createdAt: {
          [Op.between]: [payload.start_time, payload.end_time],
        },
      },
    })
    return res.json({
      error: false,
      data: result,
    })
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}
const retrieveAllBlockedClientsInGivenTime = async (req, res) => {
  try {
    const payload = {
      start_time: req.query.start_time,
      end_time: req.query.end_time,
    }

    let result = await db.client.findAll({
      where: {
        client_blocked: 1,
        createdAt: {
          [Op.between]: [payload.start_time, payload.end_time],
        },
      },
    })
    return res.json({
      error: false,
      data: result,
    })
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const retrieveAllBlockedClients = async (req, res) => {
  try {
    let result = await db.client.findAll({
      where: {
        client_blocked: 1,
      },
    })
    return res.json({
      error: false,
      data: result,
    })
  } catch (err) {
    console.log(err)
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const checkClientExists = async (req, res) => {
  try {
    const payload = {
      client_email: req.query.client_email,
      client_mobile: req.query.client_mobile,
    }
    if (payload.client_email === undefined) {
      delete payload['client_email']
    }
    if (payload.client_mobile === undefined) {
      delete payload['client_mobile']
    }

    const { error } = validateClientExists(payload)
    if (error) {
      throw error
    }

    const clientExists = await db.client.findOne({
      where: payload,
    })
    if (clientExists) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Client Already Exists',
        error: true,
      })
    }
    return res.json({
      error: false,
      message: 'Client does not exists',
    })
  } catch (err) {
    console.log({ err })
    if (err.name == 'ValidationError') {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

module.exports = {
  createClient,
  retrieveClient,
  retrieveAllActiveClients,
  retrieveAllBlockedClients,
  updateClient,
  blockClient,
  unblockClient,
  checkClientExists,
  retrieveAllActiveClientsInGivenTime,
  retrieveAllBlockedClientsInGivenTime,
}
