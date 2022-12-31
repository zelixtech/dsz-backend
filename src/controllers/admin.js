const { db, sequelize } = require('../startup/db')
const { validateTimeInterval } = require('../utils/validate')
const { Op } = require('sequelize')

const getStats = async (req, res) => {
  try {
    const payload = {
      startTime: new Date(req.query.start_time),
      endTime: new Date(req.query.end_time),
    }
    console.log(payload)

    const { error } = validateTimeInterval(payload)
    // console.log(error)
    if (error) throw new Error('ValidationError')

    const no_of_clients = await db.client.count({
      where: {
        createdAt: {
          [Op.between]: [payload.startTime, payload.endTime],
        },
      },
      group: ['client_blocked'],
      attributes: ['client_blocked', ['COUNT(*)', 'count']],
    })

    const no_of_queries = await db.query.findAll({
      where: {
        createdAt: {
          [Op.between]: [payload.startTime, payload.endTime],
        },
      },
      group: ['query_state'],
      attributes: ['query_state', ['COUNT(*)', 'count']],
    })

    const no_of_quotations = await db.quotation.count({
      where: {
        createdAt: {
          [Op.between]: [payload.startTime, payload.endTime],
        },
      },
    })

    return res.status(200).json({
      error: false,
      data: {
        no_of_clients,
        no_of_queries,
        no_of_quotations,
      },
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

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Employee Bank Info Not Found',
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
  getStats,
}
