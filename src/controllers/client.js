const { db } = require('../startup/db')
const { Op } = require('sequelize')
const {
  validateClient,
  validateClientExists,
  validateTimeInterval,
} = require('../utils/validate')

const createClient = async (req, res) => {
  try {
    if (!req.body.data) {
      throw new Error('ValidationError')
    }
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
      throw new Error('ValidationError')
    }

    var clientExists = await db.client.findOne({
      where: { client_mobile: payload.client_mobile },
    })

    if (clientExists) {
      throw new Error('Conflict')
    }

    const client = db.client.build(payload)
    await client.save()

    return res.status(200).json({
      error: false,
      data: client,
    })
  } catch (err) {
    console.log(err)

    if (err.message === 'Conflict') {
      return res.status(409).json({
        errorType: 'Conflict',
        errorMessage: 'Client Already Exists',
        error: true,
      })
    }

    if (
      err.message === 'ValidationError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
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

const retrieveClient = async (req, res) => {
  try {
    const client_id = parseInt(req.params.client_id)
    if (isNaN(client_id)) {
      throw new Error('ValidationError')
    }

    let client = await db.client.findByPk(client_id)
    if (client === null) {
      throw new Error('NotFound')
    } else {
      return res.status(200).json({
        error: false,
        data: client,
      })
    }
  } catch (err) {
    console.log(err)

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Client Not Found',
        error: true,
      })
    }

    if (
      err.message === 'ValidationError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
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

const updateClient = async (req, res) => {
  try {
    if (!req.body.data) {
      throw new Error('ValidationError')
    }
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
      throw new Error('ValidationError')
    }

    let client = await db.client.findByPk(client_id)
    if (client === null) {
      throw new Error('NotFound')
    } else {
      await client.update({
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

      return res.status(200).json({
        error: false,
        data: client,
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
    }

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Client Not Found',
        error: true,
      })
    }

    if (
      err.message === 'ValidationError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
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

const blockClient = async (req, res) => {
  try {
    const client_id = parseInt(req.params.client_id)

    if (isNaN(client_id)) {
      throw new Error('ValidationError')
    }

    let client = await db.client.findByPk(client_id)

    if (client === null) {
      throw new Error('NotFound')
    } else {
      await client.update({
        client_blocked: true,
      })

      return res.status(200).json({
        error: false,
        data: client,
      })
    }
  } catch (err) {
    console.log(err)
    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Client Not Found',
        error: true,
      })
    }

    if (
      err.message === 'ValidationError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
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

const unblockClient = async (req, res) => {
  try {
    const client_id = parseInt(req.params.client_id)

    if (isNaN(client_id)) {
      throw new Error('ValidationError')
    }

    let result = await db.client.findByPk(client_id)

    if (result === null) {
      throw new Error('NotFound')
    } else {
      await result.update({
        client_blocked: false,
      })

      return res.status(200).json({
        error: false,
        data: result,
      })
    }
  } catch (err) {
    console.log(err)

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Client Not Found',
        error: true,
      })
    }

    if (
      err.message === 'ValidationError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
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

const retrieveAllActiveClients = async (req, res) => {
  try {
    let result = await db.client.findAll({
      where: {
        client_blocked: 0,
      },
    })

    return res.status(200).json({
      error: false,
      data: result,
    })
  } catch (err) {
    console.log(err)

    if (
      err.message === 'ValidationError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
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

const retrieveAllActiveClientsInGivenTime = async (req, res) => {
  try {
    const payload = {
      startTime: req.query.start_time,
      endTime: req.query.end_time,
    }

    const { error } = validateTimeInterval(payload)
    if (error) throw new Error('ValidationError')

    let result = await db.client.findAll({
      where: {
        client_blocked: 0,
        createdAt: {
          [Op.between]: [payload.startTime, payload.endTime],
        },
      },
    })

    return res.status(200).json({
      error: false,
      data: result,
    })
  } catch (err) {
    console.log(err)

    if (
      err.message === 'ValidationError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
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

const retrieveAllBlockedClientsInGivenTime = async (req, res) => {
  try {
    const payload = {
      startTime: req.query.start_time,
      endTime: req.query.end_time,
    }

    const { error } = validateTimeInterval(payload)
    if (error) throw new Error('ValidationError')

    let result = await db.client.findAll({
      where: {
        client_blocked: 1,
        createdAt: {
          [Op.between]: [payload.startTime, payload.endTime],
        },
      },
    })

    return res.status(200).json({
      error: false,
      data: result,
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

const retrieveAllBlockedClients = async (req, res) => {
  try {
    let result = await db.client.findAll({
      where: {
        client_blocked: 1,
      },
    })
    return res.status(200).json({
      error: false,
      data: result,
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
      throw new Error('ValidationError')
    }

    const clientExists = await db.client.findOne({
      where: payload,
    })
    if (clientExists) {
      throw new Error('Conflict')
    }

    return res.status(200).json({
      error: false,
      message: 'Client does not exists',
    })
  } catch (err) {
    console.log({ err })
    if (err.message === 'Conflict') {
      return res.status(409).json({
        errorType: 'Conflict',
        errorMessage: 'Employee Already Exists',
        error: true,
      })
    }

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
