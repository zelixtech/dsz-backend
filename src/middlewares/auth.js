const { apiLogger } = require('../startup/logger')

const allowEmployee = (req, res, next) => {
  if (req.session.isAuthenticated) {
    next()
  } else {
    apiLogger.error('UnAuthorized Access')
    return res.status(401).send({
      success: false,
      errorType: 'UnAuthorized',
      errorMessage: 'UnAuthorized User! Access Denied',
    })
  }
}

const allowLocal = (req, res, next) => {
  if (req.body.data.isLocalhost || req.session.isAuthenticated) {
    next()
  } else {
    apiLogger.error('UnAuthorized Access')

    return res.status(401).send({
      success: false,
      errorType: 'UnAuthorized',
      errorMessage: 'UnAuthorized User! Access Denied',
    })
  }
}

const allowHR = (req, res, next) => {
  if (req.session.isHR) {
    next()
  } else {
    apiLogger.error('UnAuthorized Access')

    return res.status(401).send({
      success: false,
      errorType: 'UnAuthorized',
      errorMessage: 'UnAuthorized User! Access Denied',
    })
  }
}

const allowAdmin = (req, res, next) => {
  if (req.session.isAdmin) {
    next()
  } else {
    apiLogger.error('UnAuthorized Access')

    return res.status(401).send({
      success: false,
      errorType: 'UnAuthorized',
      errorMessage: 'UnAuthorized User! Access Denied',
    })
  }
}

const allowBothAdminAndHR = (req, res, next) => {
  if (req.session.isAdmin || req.session.isHR) {
    next()
  } else {
    apiLogger.error('UnAuthorized Access')

    return res.status(401).send({
      success: false,
      errorType: 'UnAuthorized',
      errorMessage: 'UnAuthorized User! Access Denied',
    })
  }
}

module.exports = {
  allowEmployee,
  allowAdmin,
  allowHR,
  allowBothAdminAndHR,
  allowLocal,
}
