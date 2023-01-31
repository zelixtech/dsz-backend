const { db } = require('../startup/db')
const {
  validateQuery,
  validateQueryStatus,
  validateEmpQueryWithStatus,
  validateTimeInterval,
} = require('../utils/validate')
const { Op } = require('sequelize')
const moment = require('moment')

const createQuery = async (req, res) => {
  try {
    if (!req.body.data) {
      throw new Error('ValidationError')
    }
    const payload = {
      client_id: req.body.data.client_id,
      employee_id: req.body.data.employee_id,
      query_source: req.body.data.query_source,
      query_create_time: req.body.data.query_create_time,
      query_subject: req.body.data.query_subject,
      query_product: req.body.data.query_product,
      query_message: req.body.data.query_message,
      query_state: req.body.data.query_state,
    }

    payload.query_create_time = new Date(payload.query_create_time * 1000)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ')

    const { error } = validateQuery(payload)
    if (error) {
      throw new Error('ValidationError')
    }

    const newQuery = db.query.build(payload)
    await newQuery.save()

    const cntQueries = await db.query.count({
      where: {
        client_id: payload.client_id,
      },
    })

    if (cntQueries > 1) {
      const client = await db.client.findByPk(payload.client_id)
      await client.update({
        client_isNew: 'old',
      })
    }

    return res.status(200).json({
      error: false,
      data: newQuery,
    })
  } catch (err) {
    console.log({ err })

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

    if (err.name === 'SequelizeForeignKeyConstraintError') {
      return res.status(404).json({
        errorType: 'Bad Request',
        errorMessage: 'Client Do not Exists',
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

const getQuery = async (req, res) => {
  try {
    const query_id = parseInt(req.params.query_id)
    if (isNaN(query_id)) {
      throw new Error('ValidationError')
    }

    let result = await db.query.findByPk(query_id, {
      include: [
        {
          model: db.client,
          as: 'client',
        },
      ],
    })

    if (result === null) {
      throw new Error('NotFound')
    } else {
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
        errorMessage: 'Query Not Found',
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

const updateQuery = async (req, res) => {
  try {
    if (!req.body.data) {
      throw new Error('ValidationError')
    }
    const payload = {
      client_id: req.body.data.client_id,
      employee_id: req.body.data.employee_id,
      query_source: req.body.data.query_source,
      query_create_time: req.body.data.query_create_time,
      query_subject: req.body.data.query_subject,
      query_product: req.body.data.query_product,
      query_message: req.body.data.query_message,
      query_state: req.body.data.query_state,
    }

    payload.query_create_time = new Date(payload.query_create_time * 1000)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ')

    const { error } = validateQuery(payload)

    const query_id = parseInt(req.params.query_id)

    if (error || isNaN(query_id)) {
      throw new Error('ValidationError')
    }

    let result = await db.query.findByPk(query_id)
    if (result === null) {
      throw new Error('NotFound')
    } else {
      await result.update({
        client_id: payload.client_id,
        employee_id: payload.employee_id,
        query_source: payload.query_source,
        query_create_time: payload.query_create_time,
        query_subject: payload.query_subject,
        query_product: payload.query_product,
        query_message: payload.query_message,
        query_state: payload.query_state,
      })

      return res.status(200).json({
        error: false,
        data: result,
      })
    }
  } catch (err) {
    console.log(err)
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Unique Field Required',
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

const updateQueryStatus = async (req, res) => {
  try {
    if (!req.body.data) {
      throw new Error('ValidationError')
    }
    const payload = {
      query_id: req.params.query_id,
      query_state: req.body.data.query_state,
    }
    const { error } = validateQueryStatus(payload)

    const query_id = parseInt(req.params.query_id)
    if (error || isNaN(query_id)) {
      throw new Error('ValidationError')
    }

    let result = await db.query.findByPk(query_id)

    if (result === null) {
      throw new Error('NotFound')
    } else {
      if (
        result.dataValues.employee_id !== req.session.employee_id ||
        !req.session.isAdmin ||
        !req.session.isHR
      ) {
        throw new Error('Forbidden')
      }

      await result.update({
        query_state: payload.query_state,
      })

      const client = await db.client.findByPk(result.dataValues.client_id)
      await client.update({
        client_isNew: 'old',
      })

      res.status(200).json({
        error: false,
        data: result,
      })
    }
  } catch (err) {
    console.log(err)
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        errorType: 'Bad Request',
        errorMessage: 'Unique Field Required',
        error: true,
      })
    }

    if (err.message === 'Forbidden') {
      return res.status(403).json({
        error: true,
        errorType: 'Forbidden',
        errorMessage: 'Access Forbidden',
      })
    }

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Query Not Found',
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

const getAllQueriesOfActiveClients = async (req, res) => {
  try {
    let result = await db.query.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: db.client,
          as: 'client',
          where: {
            client_blocked: 0,
          },
        },
      ],
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

const getAllQueriesOfBlockedClients = async (req, res) => {
  try {
    let result = await db.query.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: db.client,
          as: 'client',
          where: {
            client_blocked: 1,
          },
        },
      ],
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

const getAllQueriesAssignedToEmployee = async (req, res) => {
  try {
    const payload = {
      query_state: req.query.query_state,
      employee_id: parseInt(req.query.employee_id),
    }
    const { error } = validateEmpQueryWithStatus(payload)

    if (error) {
      throw new Error('ValidationError')
    }
    console.log(payload.employee_id)
    console.log(req.session.employee_id)
    console.log(req.session.isHR)
    console.log(req.session.isAdmin)
    console.log(payload)
    if (
      payload.employee_id !== req.session.employee_id ||
      !req.session.isAdmin ||
      !req.session.isHR
    ) {
      throw new Error('Forbidden')
    }

    let result = await db.query.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        employee_id: payload.employee_id,
        query_state: payload.query_state,
      },
      include: [
        {
          model: db.client,
          as: 'client',
        },
      ],
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

    if (err.message === 'Forbidden') {
      return res.status(403).json({
        error: true,
        errorType: 'Forbidden',
        errorMessage: 'Access Forbidden',
      })
    }

    return res.status(500).json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const getAllQueriesOfAClient = async (req, res) => {
  try {
    if (isNaN(req.params.client_id)) {
      throw new Error('ValidationError')
    }

    let client = await db.client.findByPk(req.params.client_id)
    if (!client) {
      throw new Error('NotFound')
    }

    let result = await db.query.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        client_id: req.params.client_id,
      },
    })

    return res.status(200).json({
      error: false,
      data: {
        client: client,
        queries: result,
      },
    })
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

const getAllUnassignedQueriesActive = async (req, res) => {
  try {
    let result = await db.query.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        employee_id: null,
      },
      include: [
        {
          model: db.client,
          as: 'client',
          where: {
            client_blocked: 0,
          },
        },
      ],
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

const getAllUnassignedQueriesBlocked = async (req, res) => {
  try {
    let result = await db.query.findAll({
      where: {
        employee_id: null,
      },
      include: [
        {
          model: db.client,
          as: 'client',
          where: {
            client_blocked: 1,
          },
        },
      ],
      order: [['createdAt', 'DESC']],
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

const assignQueryToEmployee = async (req, res) => {
  try {
    if (!req.body.data) {
      throw new Error('ValidationError')
    }
    const payload = {
      employee_id: req.body.data.employee_id,
      query_id: req.body.data.query_id,
    }

    if (isNaN(payload.employee_id) || isNaN(payload.query_id)) {
      throw new Error('ValidationError')
    }

    const result = await db.query.findByPk(payload.query_id)
    if (result === null) {
      throw new Error('NotFound')
    }

    if (result.dataValues.employee_id) {
      throw new Error('Conflict')
    }

    await result.update({
      employee_id: payload.employee_id,
      query_state: 'running',
    })

    const client = await db.client.findByPk(result.dataValues.client_id)
    await client.update({
      client_isNew: 'old',
    })

    return res.status(200).json({
      data: result,
      error: false,
    })
  } catch (err) {
    console.log(err)
    if (err.name === 'SequelizeForeignKeyConstraintError') {
      return res.status(404).json({
        errorType: 'Bad Request',
        errorMessage: 'Employee Not Found',
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

    if (err.message === 'Conflict') {
      return res.status(409).json({
        errorType: 'Conflict',
        errorMessage: 'Query Already Assigned',
        error: true,
      })
    }

    if (err.message === 'ValidationError') {
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

const retrieveAllQueriesInGivenTime = async (req, res) => {
  try {
    const payload = {
      startTime: req.query.start_time,
      endTime: req.query.end_time,
    }

    const { error } = validateTimeInterval(payload)
    if (error) throw new Error('ValidationError')

    let result = await db.query.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        createdAt: {
          [Op.between]: [payload.startTime, payload.endTime],
        },
      },
      include: [
        {
          model: db.client,
          as: 'client',
          where: {
            client_blocked: 0,
          },
        },
      ],
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

const retrieveAllQueriesInGivenTimeBlocked = async (req, res) => {
  try {
    const payload = {
      startTime: req.query.start_time,
      endTime: req.query.end_time,
    }

    const { error } = validateTimeInterval(payload)
    if (error) throw new Error('ValidationError')

    let result = await db.query.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        createdAt: {
          [Op.between]: [payload.startTime, payload.endTime],
        },
      },
      include: [
        {
          model: db.client,
          as: 'client',
          where: {
            client_blocked: 1,
          },
        },
      ],
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

const getQueriesCreatedUnAssigned = async (req, res) => {
  try {
    let minLastUpdateMoment = moment()
      .subtract(15, 'd')
      .format('YYYY-MM-DD HH:MM:SS')

    minLastUpdateMoment = Date(minLastUpdateMoment)
    let result = await db.query.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        query_create_time: {
          [Op.lte]: minLastUpdateMoment,
        },
        employee_id: null,
      },
      include: [
        {
          model: db.client,
          as: 'client',
          where: {
            client_blocked: 0,
          },
        },
      ],
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

const getQueriesRunningNoFollowup = async (req, res) => {
  try {
    const employee_id = req.query.employee_id
    if (!employee_id || isNaN(employee_id)) {
      throw new Error('ValidationError')
    }

    let minLastUpdateMoment = moment().subtract(15, 'd')

    let queries = await db.query.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        employee_id: employee_id,
      },
      include: [
        {
          model: db.client,
          as: 'client',
          where: {
            client_blocked: 0,
          },
        },
        {
          model: db.followup,
          as: 'followups',
          order: [['updatedAt', 'DESC']],
          limit: 1,
        },
      ],
    })

    const result = []
    queries.forEach((value) => {
      if (value.dataValues.followups.length <= 0) {
        result.push(value)
      } else {
        const queryLastUpdateMoment = moment(
          value.dataValues.followups[0].updatedAt
        )
        if (queryLastUpdateMoment.isBefore(minLastUpdateMoment)) {
          result.push(value)
        }
      }
    })

    return res.status(200).json({
      error: false,
      data: result,
    })
  } catch (err) {
    console.log(err)

    if (err.message === 'ValidationError') {
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

module.exports = {
  createQuery,
  getQuery,
  updateQuery,
  getAllQueriesOfActiveClients,
  getAllQueriesOfBlockedClients,
  getAllQueriesAssignedToEmployee,
  getAllUnassignedQueriesActive,
  getAllUnassignedQueriesBlocked,
  assignQueryToEmployee,
  getAllQueriesOfAClient,
  updateQueryStatus,
  retrieveAllQueriesInGivenTime,
  retrieveAllQueriesInGivenTimeBlocked,
  getQueriesCreatedUnAssigned,
  getQueriesRunningNoFollowup,
}
