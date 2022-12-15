require('dotenv').config()
const express = require('express')
const bcrypt = require('bcrypt')
const { validateLogin } = require('../utils/validate')
const router = express.Router()
const { db } = require('../startup/db')
const { Op } = require('sequelize')
const moment = require('moment')

// const { clientController } = require('../controllers/');

router.post('/', async (req, res) => {
  try {
    const payload = {
      email: req.body.data.email,
      password: req.body.data.password,
    }
    const { error } = validateLogin(payload)
    if (error) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Validation Error',
        error: true,
      })
    }

    const result = await db.employee.findOne({
      where: {
        employee_email: payload.email,
      },
    })

    const checkPassword = await bcrypt.compare(
      payload.password,
      result.dataValues.employee_password
    )
    if (checkPassword === true) {
      // console.log(r
      // console.log('logged in')
      // const mom = moment()

      let current = new Date()
      let hour = current.getHours()
      // let attendance_MMYY = "";
      let attendance_status = 'leave'
      if (hour < 11) {
        attendance_status = 'half'
      }
      if (hour < 8) {
        attendance_status = 'full'
      }
      // let date_of_attendance = "" + String(date.getDay() + 1).padStart(2, '0') + String(date.getMonth() + 1).padStart(2, '0') + current.getFullYear();

      let date_of_attendance = moment().format('YYYY-MM-DD')

      const isAttendanceDone = await db.attendance.findOne({
        where: {
          employee_id: result.dataValues.employee_id,
          date_of_attendance: date_of_attendance,
        },
      })
      if (isAttendanceDone === null) {
        const attendanceInfo = db.attendance.build({
          employee_id: result.dataValues.employee_id,
          attendance_status: attendance_status,
          date_of_attendance: date_of_attendance,
        })
        await attendanceInfo.save()
      }

      // console.log(result)
      req.session.isAuthenticated = true
      req.session.isAdmin = result.dataValues.isAdmin
      req.session.isHR = result.dataValues.isHR
      req.session.employee_id = result.dataValues.employee_id
      res.json({
        result,
      })
    } else {
      console.log('password not matched')
      res.json({
        error: true,
      })
    }
  } catch (err) {
    console.log(err)
    res.json({
      error: true,
      err: err,
    })
  }
})

router.get('/attendance/allEmployees', async (req, res) => {
  try {
    const month = req.query.month
    const year = req.query.year
    const startOfMonth = parseInt(moment().startOf('month').format('DD'))
    const endOfMonth = parseInt(moment().endOf('month').format('DD'))
    const startDate =
      '' + year + '-' + month + '-' + String(startOfMonth).padStart(2, '0')
    const endDate = '' + year + '-' + month + '-' + endOfMonth

    let attendancesOfEachEmployee = await db.employee.findAll({
      include: {
        model: db.attendance,
        as: 'attendances',
        where: {
          date_of_attendance: {
            [Op.between]: [startDate, endDate],
          },
        },
        required: false,
      },
      order: [
        [
          { model: db.attendance, as: 'attendances' },
          'date_of_attendance',
          'ASC',
        ],
      ],
    })

    attendancesOfEachEmployee.forEach((e) => {
      // console.log(e.employee_id)
      const currDate = parseInt(moment().format('DD'))
      const arr = []
      let absent = 0,
        half = 0,
        full = 0,
        leave = 0
      for (let i = startOfMonth; i <= endOfMonth; ++i) {
        let attendance_status = 'absent'
        if (i > currDate) attendance_status = 'NA'
        arr.push(attendance_status)
      }
      e.dataValues.attendances.forEach((at) => {
        const day = parseInt(
          moment(at.dataValues.date_of_attendance).format('DD')
        )
        arr[day] = at.dataValues.attendance_status
      })
      for (let x in arr) {
        if (arr[x] === 'half') half++
        if (arr[x] === 'leave') leave++
        if (arr[x] === 'full') full++
        if (arr[x] === 'absent') absent++
      }
      e.dataValues.attendance_stats = {
        half,
        full,
        absent,
        leave,
        startOfMonth,
        endOfMonth,
      }
      e.dataValues.attendance_array = arr
    })

    res.json({
      data: attendancesOfEachEmployee,
    })
  } catch (err) {
    console.log(err)
    res.json({
      error: true,
    })
  }
})

router.get('/attendance/:employee_id', async (req, res) => {
  try {
    const month = req.query.month
    const year = req.query.year
    const startOfMonth = parseInt(moment().startOf('month').format('DD'))
    const endOfMonth = parseInt(moment().endOf('month').format('DD'))
    const startDate =
      '' + year + '-' + month + '-' + String(startOfMonth).padStart(2, '0')
    const endDate = '' + year + '-' + month + '-' + endOfMonth

    let result = await db.attendance.findAll({
      where: {
        employee_id: req.params.employee_id,
        date_of_attendance: {
          [Op.between]: [startDate, endDate],
        },
      },
    })
    // console.log(result);

    const currDate = parseInt(moment().format('DD'))
    const arr = []
    for (let i = startOfMonth; i <= endOfMonth; ++i) {
      let attendance_status = 'absent'
      if (i > currDate) attendance_status = 'NA'
      arr.push(attendance_status)
    }
    let absent = 0,
      half = 0,
      full = 0,
      leave = 0

    result.forEach((e) => {
      console.log(e)
      let d = parseInt(moment(e.date_of_attendance).format('DD'))
      arr[d] = e.attendance_status
      // console.log(arr[d])
    })

    for (let x in arr) {
      if (arr[x] === 'half') half++
      if (arr[x] === 'leave') leave++
      if (arr[x] === 'full') full++
      if (arr[x] === 'absent') absent++
    }
    const attendance_stats = {
      half,
      full,
      absent,
      leave,
      startOfMonth,
      endOfMonth,
    }
    const attendance_array = arr

    res.json({
      data: {
        result,
        attendance_stats,
        attendance_array,
      },
    })
  } catch (err) {
    console.log(err)
    res.json({
      error: true,
    })
  }
})

router.put('/attendance/:employee_id', async (req, res) => {
  try {
    const payload = {
      date_of_attendance: req.body.data.date_of_attendance,
      employee_id: req.params.employee_id,
      attendance_status: req.body.data.attendance_status,
    }
    // const month = req.query.month;
    // const year = req.query.year;
    // const date = req.query.date;
    // const startDate = "" + year + "-" + month + "-01";
    // const endDate = "" + year + "-" + month + "-31";

    let result = await db.attendance.findOne({
      where: {
        employee_id: payload.employee_id,
        date_of_attendance: payload.date_of_attendance,
      },
    })
    if (result === null) {
      const attendanceInfo = db.attendance.build(payload)
      await attendanceInfo.save()
    } else {
      await result.update({
        attendance_status: payload.attendance_status,
      })
    }
    // console.log(result)

    res.json({
      data: result,
      error: false,
    })
  } catch (err) {
    console.log(err)
    res.json({
      error: true,
    })
  }
})

// const startOfMonth = parseInt(moment().startOf('month').format('DD'));
// const endOfMonth = parseInt(moment().endOf('month').format('DD'));
// const startDayOfMonth = (moment().startOf('month').format(''));
// const endDayOfMonth = moment().endOf('month').day();
// console.log(endDayOfMonth, startDayOfMonth);
// const currDate = parseInt(moment().format('DD'));
// console.log({ startOfMonth, endOfMonth })
// const arr = [];
// for (let i = startOfMonth; i <= endOfMonth; ++i) {
//   let attendance_status = "leave";
//   if (i > currDate) attendance_status = "pending"
//   arr.push({ i: attendance_status })
// }

// console.log(arr);
// (() => {

// })()

module.exports = router
