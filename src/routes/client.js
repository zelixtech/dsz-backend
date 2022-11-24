require('dotenv').config()
const express = require('express');
const router = express.Router();

const clientController = require('../controllers/client');

router.get('/:client_id', clientController.retrieveClient)
router.post('/', clientController.createClient)
// router.get('/all', clientController.retrieveAllClients)

module.exports = router
