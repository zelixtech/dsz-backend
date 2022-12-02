const allowEmployee = (req, res, next) => {
  if (req.session.isAuthenticated) {
    next();
  } else {
    return res.status(401).send({
      success: false,
      errorType: "UnAuthorized",
      errorMessage: "UnAuthorized User! Access Denied",
    });
  }
};

const allowHR = (req, res, next) => {
  if (req.session.isHR) {
    next();
  }
  else {
    return res.status(401).send({
      success: false,
      errorType: "UnAuthorized",
      errorMessage: "UnAuthorized User! Access Denied",
    });
  }
}

const allowAdmin = (req, res, next) => {
  if (req.session.isAdmin) {
    next();
  }
  else {
    return res.status(401).send({
      success: false,
      errorType: "UnAuthorized",
      errorMessage: "UnAuthorized User! Access Denied",
    });
  }
}

const allowBothAdminAndHR = (req, res, next) => {
  if (req.session.isAdmin || req.session.isHR) {
    next();
  }
  else {
    return res.status(401).send({
      success: false,
      errorType: "UnAuthorized",
      errorMessage: "UnAuthorized User! Access Denied",
    });
  }
}

module.exports = { allowEmployee, allowAdmin, allowHR, allowBothAdminAndHR };
