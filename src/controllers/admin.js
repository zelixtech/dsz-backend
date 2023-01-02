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

    return res.status(500).json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

const addIpAddress = async (req, res) => {
  try {
    if (!req.body.data || !req.body.data.ip_address)
      throw new Error('ValidationError')

    const ip_address = db.ip_addr.build({
      ip_address: req.body.data.ip_address,
    })
    await ip_address.save()

    return res.status(200).json({
      error: false,
      data: ip_address,
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

const removeIpAddress = async (req, res) => {
  try {
    if (!req.params.ip_addr_id || isNaN(req.params.ip_addr_id))
      throw new Error('ValidationError')

    const itemsDeleted = await db.ip_addr.destroy({
      where: {
        ip_addr_id: req.params.ip_addr_id,
      },
    })

    return res.status(200).json({
      error: false,
      message: `${itemsDeleted} item(s) deleted successfully`,
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
  getStats,
  addIpAddress,
  removeIpAddress,
}
