const bodyParser = require("body-parser");
const cors = require('cors');
const { employee, client } = require('../routes/')


module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json())
  app.use('/api/employee', employee);
  app.use('/api/client', client);
}
