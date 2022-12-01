const { db } = require('../startup/db');
const { validateQuery } = require('../utils/validate');

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
      query_state: req.body.data.query_state
    }
    payload.query_create_time = new Date((payload.query_create_time) * 1000).toISOString().slice(0, 19).replace('T', ' ');

    // console.log(payload.query_create_time);

    const { error } = validateQuery(payload);
    if (error) {
      // return { validationError: true }
      console.log(error);

      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }

    const newQuery = db.query.build(payload)
    await newQuery.save();
    console.log(newQuery)
    return res.json({
      error: false,
      data: newQuery
    })
  }
  catch (err) {
    console.log(err);
    return res.json({
      errorType: 'Server Error',
      errorMessage: "Internal Server Error",
      error: true,
    })
  }
}

const getQuery = async (req, res) => {
  try {
    const query_id = parseInt(req.params.query_id);
    if (isNaN(query_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    let result = await db.query.findByPk(query_id);
    if (result === null) {
      console.log("not found");
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Query Do Not Exists",
        error: true,
      })
    }
    else {
      // return { query: result }
      return res.json({
        error: false,
        data: result
      })
    }
  }
  catch (err) {
    console.log(err);
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: "Internal Server Error",
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
      query_state: req.body.data.query_state
    }
    payload.query_create_time = new Date((payload.query_create_time) * 1000).toISOString().slice(0, 19).replace('T', ' ');
    const { error } = validateQuery(payload);
    console.log(error);

    const query_id = parseInt(req.params.query_id);
    if (error || isNaN(query_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    let result = await db.query.findByPk(query_id);
    if (result === null) {
      console.log("not found");
      // return { clientNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Query Do Not Exists",
        error: true,
      })
    }
    else {
      await result.update({
        client_id: payload.client_id,
        employee_id: payload.employee_id,
        query_source: payload.query_source,
        query_create_time: payload.query_create_time,
        query_subject: payload.query_subject,
        query_product: payload.query_product,
        query_message: payload.query_message,
        query_state: payload.query_state
      });
      res.json({
        message: "hello",
        result,
      })
    }
  }
  catch (err) {
    console.log(err);
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Unique Field Required',
        error: true,
      })
    }
    else {
      return res.json({
        errorType: 'Server Error',
        errorMessage: "Internal Server Error",
        error: true,
      })
    }
    // return { dbError: true };
  }
}

const getAllQueries = async (req, res) => {
  try {
    let result = await db.query.findAll();
    return res.json({
      error: false,
      data: result
    })
  }
  catch (err) {
    console.log(err);
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: "Internal Server Error",
      error: true,
    })
  }
}

const getAllQueriesAssignedToEmployee = async (req, res) => {
  try {
    if (isNaN(req.params.employee_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    let result = await db.query.findAll({
      where: {
        employee_id: req.params.employee_id
      }
    });
    return res.json({
      error: false,
      data: result
    })
  }
  catch (err) {
    console.log(err);
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: "Internal Server Error",
      error: true,
    })
  }
}

const getAllQueriesAssignedToClient = async (req, res) => {
  try {
    if (isNaN(req.params.client_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    let result = await db.query.findAll({
      where: {
        client_id: req.params.client_id
      }
    });
    return res.json({
      error: false,
      data: result
    })
  }
  catch (err) {
    console.log(err);
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: "Internal Server Error",
      error: true,
    })
  }
}


const getAllUnassignedQueries = async (req, res) => {
  try {
    let result = await db.query.findAll({
      where: {
        employee_id: null
      }
    });
    console.log(result);
    return res.json({
      error: false,
      data: result
    })
  }
  catch (err) {
    console.log(err);
    // return { dbError: true };
    return res.json({
      errorType: 'Server Error',
      errorMessage: "Internal Server Error",
      error: true,
    })
  }
}

const assignQueryToEmployee = async (req, res) => {
  try {
    const payload = {
      employee_id: req.body.data.employee_id,
      query_id: req.body.data.query_id
    }

    if (isNaN(payload.employee_id) || isNaN(payload.query_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }

    const result = await db.query.findByPk(payload.query_id);
    if (result === null) {
      console.log("not found");
      // return { clientNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Query Do Not Exists",
        error: true,
      })
    }
    await result.update({
      employee_id: payload.employee_id
    })
    res.json({
      message: "hello",
      result,
    })
  }
  catch (err) {
    console.log(err);
    if (err.name === "SequelizeForeignKeyConstraintError") {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: 'Employee Doesnot Exist',
        error: true,
      })
    }
    else {
      return res.json({
        errorType: 'Server Error',
        errorMessage: "Internal Server Error",
        error: true,
      })
    }
  }
}


// (async () => {
//   await getAllUnassignedQueries()
// })()

module.exports = { createQuery, getQuery, updateQuery, getAllQueries, getAllQueriesAssignedToEmployee, getAllUnassignedQueries, assignQueryToEmployee, getAllQueriesAssignedToClient }