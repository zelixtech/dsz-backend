require('dotenv').config()
const { db } = require('../startup/db')
const { Op } = require('sequelize')
const moment = require('moment')
const bcrypt = require('bcrypt')
const {
  validateLogin,
  validateAttendanceUpdate,
  validateLeaveNotification,
} = require('../utils/validate')

const login = async (req, res) => {
  try {
    const payload = {
      email: req.body.data.email,
      password: req.body.data.password,
    }

    const { error } = validateLogin(payload)
    if (error) {
      throw new Error('ValidationError')
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
      let current = new Date()
      let hour = current.getHours()
      let attendance_status = 'leave'
      if (hour < 11) {
        attendance_status = 'half'
      }
      if (hour < 8) {
        attendance_status = 'full'
      }

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

      req.session.isAuthenticated = true
      req.session.isAdmin = result.dataValues.isAdmin
      req.session.isHR = result.dataValues.isHR
      req.session.employee_id = result.dataValues.employee_id

      return res.status(200).json({
        data: result,
        error: false,
      })
    } else {
      return res.status(400).json({
        error: true,
        errorType: 'Bad Request',
        errorMessage: 'Wrong Credentials',
      })
    }
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

const getAttendanceOfEachEmployee = async (req, res) => {
  try {
    const month = req.query.month
    const year = req.query.year
    if (!month || isNaN(month) || !year || isNaN(year)) {
      throw new Error('ValidationError')
    }

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

    res.status(200).json({
      data: attendancesOfEachEmployee,
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

const getAttendanceOfAEmployee = async (req, res) => {
  try {
    const month = req.query.month
    const year = req.query.year

    if (!month || isNaN(month) || !year || isNaN(year)) {
      throw new Error('ValidationError')
    }

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

    res.status(200).json({
      data: {
        result,
        attendance_stats,
        attendance_array,
      },
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

const updateAttendanceOfAEmployee = async (req, res) => {
  try {
    const payload = {
      date_of_attendance: req.body.data.date_of_attendance,
      employee_id: req.params.employee_id,
      attendance_status: req.body.data.attendance_status,
    }

    const { error } = validateAttendanceUpdate(payload)
    if (error) {
      throw new Error('ValidationError')
    }

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

    res.status(200).json({
      data: result,
      error: false,
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

const leaveNotificationToHR = async (req, res) => {
  try {
    const payload = {
      leave_req_start_date: req.body.data.leave_req_start_date,
      leave_req_end_date: req.body.data.leave_req_end_date,
      employee_id: req.body.data.employee_id,
      leave_req_message: req.body.data.leave_req_message,
      leave_req_status: 'new',
    }

    const { error } = validateLeaveNotification(payload)
    if (error) {
      throw new Error('ValidationError')
    }

    const notif = db.leave_req.build(payload)
    await notif.save()

    return res.status(200).json({
      error: false,
      data: notif,
    })
  } catch (err) {
    console.log(err.name)
    console.log(err)
    if (err.name === 'SequelizeForeignKeyConstraintError') {
      return res.status(200).json({
        error: true,
        errorType: 'Bad Request',
        errorMessage: 'Employee Do not Exists',
      })
    }

    res.status(500).json({
      error: true,
      errorType: 'Internal Server Error',
      errorMessage: 'Internal Server Error',
    })
  }
}

const getAllLeaveNotifications = async (req, res) => {
  try {
    const leaveRequests = await db.leave_req.findAll({
      where: {
        leave_req_status: 'new',
      },
      include: {
        model: db.employee,
        as: 'employee',
      },
    })
    return res.status(200).json({
      data: leaveRequests,
      error: false,
    })
  } catch (err) {
    res.status(500).json({
      error: true,
      errorType: 'Internal Server Error',
      errorMessage: 'Internal Server Error',
    })
  }
}

const getAllArchivedLeaveNotifications = async (req, res) => {
  try {
    const leaveRequests = await db.leave_req.findAll({
      where: {
        leave_req_status: 'archive',
      },
      include: {
        model: db.employee,
        as: 'employee',
      },
    })
    return res.status(200).json({
      data: leaveRequests,
      error: false,
    })
  } catch (err) {
    res.status(500).json({
      error: true,
      errorType: 'Internal Server Error',
      errorMessage: 'Internal Server Error',
    })
  }
}

const updateLeaveReqStatus = async (req, res) => {
  try {
    const { leave_req_id } = req.params
    const leave = await db.leave_req.findByPk(leave_req_id)
    if (!leave) {
      throw new Error('NotFound')
    }
    await leave.update({
      leave_req_status: 'archive',
    })

    return res.status(200).json({
      data: leave,
      error: false,
    })
  } catch (err) {
    console.log(err)
    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'LeaveRequest Not Found',
        error: true,
      })
    }

    res.status(500).json({
      error: true,
      errorType: 'Internal Server Error',
      errorMessage: 'Internal Server Error',
    })
  }
}

const deleteLeaveReq = async (req, res) => {
  try {
    const { leave_req_id } = req.params
    const leave = await db.leave_req.findByPk(leave_req_id)
    if (!leave) {
      throw new Error('NotFound')
    }
    await leave.destroy()

    return res.status(200).json({
      data: leave,
      error: false,
    })
  } catch (err) {
    console.log(err)

    if (err.message === 'NotFound') {
      return res.status(404).json({
        errorType: 'Not Found',
        errorMessage: 'LeaveRequest Not Found',
        error: true,
      })
    }

    res.status(200).json({
      error: true,
      errorType: 'Internal Server Error',
      errorMessage: 'Internal Server Error',
    })
  }
}

module.exports = {
  login,
  getAttendanceOfEachEmployee,
  getAttendanceOfAEmployee,
  updateAttendanceOfAEmployee,
  leaveNotificationToHR,
  getAllLeaveNotifications,
  updateLeaveReqStatus,
  getAllArchivedLeaveNotifications,
  deleteLeaveReq,
}
