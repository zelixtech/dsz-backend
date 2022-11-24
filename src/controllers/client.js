const { db } = require('../startup/db');
const { Op } = require('sequelize')
const Joi = require('joi').extend(require('@joi/date'));

const validateClient = (client) => {
  const clientSchema = Joi.object({
    client_email: Joi.string().email().min(3).max(320).required(),
    client_name: Joi.string().min(3).max(255).required(),
    client_mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    client_address: Joi.string().min(3).max(255).required(),
    client_city: Joi.string().min(1).max(255).required(),
    client_industry: Joi.string().min(1).max(255).required(),
    client_blocked: Joi.boolean(),
  })

  return clientSchema.validate(client)
}

const createClient = async (req, res) => {
  try {
    // const data = req.body;
    const payload = {
      client_email: req.body.client.client_email,
      client_name: req.body.client.client_name,
      client_mobile: req.body.client.client_mobile,
      client_address: req.body.client.client_address,
      client_city: req.body.client.client_city,
      client_industry: req.body.client.client_industry,
      client_blocked: req.body.client.client_blocked,
    }
    const { error } = validateClient(payload);
    if (error) {
      // return { validationError: true }
      console.log(error);

      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    var clientExists = await db.client.findOne({
      where: {
        [Op.or]: [
          { client_email: payload.client_email },
          { client_mobile: payload.client_mobile },
        ]
      }
    })
    if (clientExists) {
      // return { clientAlreadyExists: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Client Already Exists",
        error: true,
      })
    }

    const newClient = db.client.build(payload)
    await newClient.save();
    console.log(newClient)
    return res.json({
      error: false,
      data: newClient
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

const retrieveClient = async (req, res) => {
  try {
    const client_id = parseInt(req.params.client_id);
    if (isNaN(client_id)) {
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Validation Error",
        error: true,
      })
    }
    let result = await db.client.findByPk(client_id);
    if (result === null) {
      console.log("not found");
      // return { clientNotFound: true };
      return res.json({
        errorType: 'Bad Request',
        errorMessage: "Client Do Not Exists",
        error: true,
      })
    }
    else {
      // return { client: result }
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

// (async () => {
//   retrieveClient({ client_id: 1 })
// })()



module.exports = { createClient, retrieveClient }