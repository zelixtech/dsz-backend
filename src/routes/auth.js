require('dotenv').config()
const express = require('express');
const bcrypt = require('bcrypt');
const { validateLogin } = require('../utils/validate');
const router = express.Router();
const { db, sequelizeSessionStore } = require('../startup/db');


// const { clientController } = require('../controllers/');

router.post('/', async (req, res) => {
  try {
    const payload = {
      email: req.body.data.email,
      password: req.body.data.password,
    }
    const { error } = validateLogin(payload);
    if (error) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }

    const result = await db.employee.findOne({
      where: {
        "employee_email": payload.email
      }
    })

    const checkPassword = await bcrypt.compare(payload.password, result.dataValues.employee_password)
    if (checkPassword === true) {
      // console.log(r
      console.log("logged in");
      // console.log(result)
      req.session.isAuthenticated = true
      req.session.isAdmin = result.dataValue.isAdmin
      req.session.isHR = result.dataValue.isHR
      req.session.employee_id = result.dataValues.employee_id
      res.json({
        result
      })
    }
    else {
      console.log('password not matched');
      res.json({
        error: true
      })
    }
  }
  catch (err) {
    console.log(err);
    res.json({
      error: true,
      err: err
    })
  }
})



module.exports = router
