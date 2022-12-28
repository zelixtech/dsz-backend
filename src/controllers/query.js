const { db } = require('../startup/db')
const {
  validateQuery,
  validateQueryStatus,
  validateEmpQueryWithStatus,
} = require('../utils/validate')
const { Op } = require('sequelize')
const moment = require('moment')

const createQuery = async (req, res) => {
  try {
    // const data = req.body;
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

    // console.log(payload.query_create_time);

    const { error } = validateQuery(payload)
    if (error) {
      // return { validationError: true }
      throw error
    }

    const newQuery = db.query.build(payload)
    await newQuery.save()
    // console.log(newQuery)
    return res.json({
      error: false,
      data: newQuery,
    })
  } catch (err) {
    console.log({ err })
    // console.log(err.name)
    // console.log('fdfs')
    if (err.name == 'ValidationError') {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    if (err.name === 'SequelizeForeignKeyConstraintError') {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Client Do not Exists',
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

const getQuery = async (req, res) => {
  try {
    const query_id = parseInt(req.params.query_id)
    if (isNaN(query_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
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
      // console.log('not found')
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Query Do Not Exists',
        error: true,
      })
    } else {
      // return { query: result }
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

const updateQuery = async (req, res) => {
  try {
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
    console.log(error)

    const query_id = parseInt(req.params.query_id)
    if (error || isNaN(query_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    let result = await db.query.findByPk(query_id)
    if (result === null) {
      // console.log('not found')
      // return { clientNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Query Do Not Exists',
        error: true,
      })
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

const updateQueryStatus = async (req, res) => {
  try {
    const payload = {
      query_id: req.params.query_id,
      query_state: req.body.data.query_state,
    }
    const { error } = validateQueryStatus(payload)
    console.log(error)

    const query_id = parseInt(req.params.query_id)
    if (error || isNaN(query_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    let result = await db.query.findByPk(query_id)
    if (result === null) {
      // console.log('not found')
      // return { clientNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Query Do Not Exists',
        error: true,
      })
    } else {
      await result.update({
        query_state: payload.query_state,
      })
      res.json({
        message: 'hello',
        result,
      })
    }
  } catch (err) {
    console.log(err)
    if (err.name === 'SequelizeUniqueConstraintError') {
      // wont occur
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Unique Field Required',
        error: true,
      })
    }

    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
    // return { dbError: true };
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

const getAllQueriesAssignedToEmployee = async (req, res) => {
  try {
    const payload = {
      query_state: req.query.query_state,
      employee_id: req.query.employee_id,
    }
    const { error } = validateEmpQueryWithStatus(payload)

    if (error) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
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

const getAllQueriesOfAClient = async (req, res) => {
  try {
    if (isNaN(req.params.client_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    let client = await db.client.findByPk(req.params.client_id)
    if (!client) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Client Do Not Exists',
        error: true,
      })
    }
    let result = await db.query.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        client_id: req.params.client_id,
      },
    })
    return res.json({
      error: false,
      data: {
        client: client,
        queries: result,
      },
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
    // console.log(result)
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
    // console.log(result)
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

const assignQueryToEmployee = async (req, res) => {
  try {
    const payload = {
      employee_id: req.body.data.employee_id,
      query_id: req.body.data.query_id,
    }

    if (isNaN(payload.employee_id) || isNaN(payload.query_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    const result = await db.query.findByPk(payload.query_id)
    if (result === null) {
      // console.log('not found')
      // return { clientNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Query Do Not Exists',
        error: true,
      })
    }
    await result.update({
      employee_id: payload.employee_id,
      query_state: 'running',
    })
    res.json({
      message: 'hello',
      result,
    })
  } catch (err) {
    console.log(err)
    if (err.name === 'SequelizeForeignKeyConstraintError') {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Employee Doesnot Exist',
        error: true,
      })
    } else {
      return res.json({
        errorType: 'Server Error',
        errorMessage: 'Internal Server Error',
        error: true,
      })
    }
  }
}

const getThings = async (req, res) => {
  // console.log({ client: db.client });
  let results = await db.query.findOne({
    where: {
      query_id: 1,
    },
    include: [
      {
        model: db.client,
        as: 'client',
      },
    ],
  })
  // console.log(results)
  res.json({ results })
}

const retrieveAllQueriesInGivenTime = async (req, res) => {
  try {
    const payload = {
      start_time: req.query.start_time,
      end_time: req.query.end_time,
    }
    let result = await db.query.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        createdAt: {
          [Op.between]: [payload.start_time, payload.end_time],
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

const retrieveAllQueriesInGivenTimeBlocked = async (req, res) => {
  try {
    const payload = {
      start_time: req.query.start_time,
      end_time: req.query.end_time,
    }
    let result = await db.query.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        createdAt: {
          [Op.between]: [payload.start_time, payload.end_time],
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

const getQueriesCreatedUnAssigned = async (req, res) => {
  try {
    let minLastUpdateMoment = moment()
      .subtract(15, 'd')
      .format('YYYY-MM-DD HH:MM:SS')
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

    return res.json({
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

    return res.json({
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
  getThings,
  updateQueryStatus,
  retrieveAllQueriesInGivenTime,
  retrieveAllQueriesInGivenTimeBlocked,
  getQueriesCreatedUnAssigned,
  getQueriesRunningNoFollowup,
}
