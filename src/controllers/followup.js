const { db } = require('../startup/db')
const { validateFollowup, validateFollowupText } = require('../utils/validate')

const createFollowup = async (req, res) => {
  try {
    const payload = {
      query_id: req.body.data.query_id,
      followup_text: req.body.data.followup_text,
    }

    const { error } = validateFollowup(payload)
    if (error) {
      throw new Error('ValidationError')
    }

    const getQuery = await db.query.findOne({
      where: {
        query_id: payload.query_id,
      },
    })

    if (!getQuery) {
      throw new Error('NotFound')
    }

    if (
      getQuery.dataVales.employee_id !== req.session.employee_id &&
      !req.session.isAdmin &&
      !req.session.isHR
    ) {
      throw new Error('Unauthorized')
    }

    const followup = db.followup.build(payload)
    await followup.save()

    return res.status(200).json({
      error: false,
      data: followup,
    })
  } catch (err) {
    console.log(err)
    if (
      err.message === 'NotFound' ||
      err.name === 'SequelizeForeignKeyConstraintError'
    ) {
      return res.status(404).json({
        error: true,
        errorType: 'Bad Request',
        errorMessage: 'Query does not exists',
      })
    }

    if (err.name === 'Unauthorized') {
      return res.status(401).json({
        error: true,
        errorType: 'Unauthorized',
        errorMessage: 'Unauthorized Access',
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

const getFollowupsForQuery = async (req, res) => {
  try {
    const { query_id } = req.params
    if (isNaN(query_id)) {
      throw new Error('ValidationError')
    }

    const getQuery = await db.query.findOne({
      where: {
        query_id: query_id,
      },
    })

    if (!getQuery) {
      throw new Error('NotFound')
    }

    if (
      getQuery.dataVales.employee_id !== req.session.employee_id &&
      !req.session.isAdmin &&
      !req.session.isHR
    ) {
      throw new Error('Unauthorized')
    }

    const result = await db.followup.findAll({
      where: {
        query_id: query_id,
      },
    })

    return res.status(200).json({
      error: false,
      data: result,
    })
  } catch (err) {
    console.log(err)

    if (err.name === 'Unauthorized') {
      return res.status(401).json({
        error: true,
        errorType: 'Unauthorized',
        errorMessage: 'Unauthorized Access',
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

const updateFollowup = async (req, res) => {
  try {
    const payload = {
      followup_id: req.params.followup_id,
      followup_text: req.body.data.followup_text,
    }

    const { error } = validateFollowupText(payload)
    if (error) {
      throw new Error('ValidationError')
    }

    const followup = await db.followup.findOne({
      where: {
        followup_id: payload.followup_id,
      },
      include: {
        model: db.query,
        as: 'query',
      },
    })
    if (!followup) {
      throw new Error('NotFound')
    }

    if (
      followup.dataVales.query.employee_id !== req.session.employee_id &&
      !req.session.isAdmin &&
      !req.session.isHR
    ) {
      throw new Error('Unauthorized')
    }

    await followup.update({
      followup_text: payload.followup_text,
    })

    return res.status(200).json({
      error: false,
      data: followup,
    })
  } catch (err) {
    console.log(err)

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'Followup Not Found',
        error: true,
      })
    }

    if (err.name === 'Unauthorized') {
      return res.status(401).json({
        error: true,
        errorType: 'Unauthorized',
        errorMessage: 'Unauthorized Access',
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

module.exports = { createFollowup, getFollowupsForQuery, updateFollowup }
