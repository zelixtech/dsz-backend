const bodyParser = require("body-parser");
const cors = require('cors');
const { employee } = require('../routes/')


module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json())
  app.use('/api/employee', employee);
}
