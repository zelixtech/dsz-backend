const { db } = require('../startup/db')
const { validateFollowup, validateFollowupText } = require('../utils/validate')

const createFollowup = async (req, res) => {
  try {
    // const data = req.body;
    const payload = {
      query_id: req.body.data.query_id,
      followup_text: req.body.data.followup_text,
    }

    const { error } = validateFollowup(payload)
    if (error) {
      // return { validationError: true }
      console.log(error)

      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    const newFollowup = db.followup.build(payload)
    await newFollowup.save()
    console.log(newFollowup)
    return res.json({
      error: false,
      data: newFollowup,
    })
  } catch (err) {
    console.log(err)
    if (err.name === 'SequelizeForeignKeyConstraintError') {
      return res.json({
        error: true,
        errorType: 'Bad Request',
        errorMessage: 'Query does not exists',
      })
    }
    return res.json({
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
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    const getQuery = await db.query.findOne({
      where: {
        query_id: query_id,
      },
    })
    if (!getQuery) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Query doesnot exists',
        error: true,
      })
    }
    const result = await db.followup.findAll({
      where: {
        query_id: query_id,
      },
    })

    return res.json({
      error: false,
      data: result,
    })
  } catch (err) {
    console.log(err)
    return res.json({
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
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }
    const result = await db.followup.findByPk(payload.followup_id)
    if (!result) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Followup does not exists',
        error: true,
      })
    }
    await result.update({
      followup_text: payload.followup_text,
    })

    return res.json({
      error: false,
      data: result,
    })
  } catch (err) {
    console.log(err)
    return res.json({
      errorType: 'Server Error',
      errorMessage: 'Internal Server Error',
      error: true,
    })
  }
}

module.exports = { createFollowup, getFollowupsForQuery, updateFollowup }
