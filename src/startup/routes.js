const bodyParser = require('body-parser')
const cors = require('cors')
const {
  employee,
  client,
  query,
  auth,
  followup,
  quotation,
  product,
  admin,
  invoice,
} = require('../routes/')
const { expressSession, sequelizeSessionStore } = require('./db')
// const expressSession = require('express-session');
require('dotenv').config()
const corsOptions = {
  origin: 'https://www.darshansafety.in',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
var morgan = require('morgan')
var fs = require('fs')
var path = require('path')
const { default: helmet } = require('helmet')
const toobusy = require('toobusy-js')
const compression = require('compression')
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
  flags: 'a',
})

module.exports = (app) => {
  app.set('trust proxy', 1)
//  app.use((req, res, next) => {
  //  console.log(req.connection.remoteAddress);
//console.log(req.headers);
//next();
 // })
//  app.use(cors(corsOptions))
app.use(function (req, res, next) {

  var allowedDomains = ['https://www.darshansafety.in','http://localhost:8000' ];
  var origin = req.headers.origin;
console.log(origin);
  if(allowedDomains.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
})

  app.use(helmet())
  app.use(morgan('combined', { stream: accessLogStream }))
  app.use(bodyParser.json())
  app.use(compression())
  app.use(function (req, res, next) {
    if (toobusy()) {
      res.send(503, 'Server too busy!')
    } else {
      next()
    }
  })
  app.use(
    expressSession({
      name: 'darshanSession',
      store: sequelizeSessionStore,
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      },
    })
  )
  app.use('/api/employee', employee)
  app.use('/api/client', client)
  app.use('/api/query', query)
  app.use('/api/auth', auth)
  app.use('/api/followup', followup)
  app.use('/api/quotation', quotation)
  app.use('/api/invoice', invoice)
  app.use('/api/product', product)
  app.use('/api/admin', admin)
}

/*
done
POST /api/employee/
GET /api/employe/:id
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
