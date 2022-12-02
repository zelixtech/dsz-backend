const bodyParser = require("body-parser");
const cors = require('cors');
const { employee, client, query, auth, followup, quotation } = require('../routes/')
const { expressSession, sequelizeSessionStore } = require('./db');
// const expressSession = require('express-session');
require('dotenv').config();

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json())
  app.use(expressSession({
    name: "darshanSession",
    store: sequelizeSessionStore,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  }))
  app.use('/api/employee', employee);
  app.use('/api/client', client);
  app.use('/api/query', query);
  app.use('/api/auth', auth);
  app.use('/api/followup', followup);
  app.use('/api/quotation', quotation);
}



/*
done
POST /api/employee/
GET /api/employee/:id
PATCH /api/employee/
DELETE /api/employee/

// login
PATCH /api/employee/makeAdmin (also in PATCH/employee)


POST /api/client/
GET /api/client/:id
PATCH /api/client/ (block client)
DELETE /api/client/

password change and create


POST /api/quotation/
GET /api/quotation/:id

GET /api/client/allQuotations

POST /api/login/

//hr and admin
PATCH /api/attendance/:employeeid {attendance_status:}

GET /api/attendance/:employee [array of all present and half and leave]


// employee
PATCH /api/employee/bank_info
GET /api/employee/bank_info


POST /api/followup/
GET /api/followups/:query_id (all followups)
PATCH /api/followup/:followup_id
DELETE /api/followup/:followup_id


// get products for the given quotation
// add product for the given quotation


// get all new queries
// get all employee queries
// create query from frontend
// create query from apis in backend

// assign query to another employee


// admin: delete query

*/