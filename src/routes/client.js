require('dotenv').config()
const express = require('express');
const router = express.Router();

const { clientController } = require('../controllers/');

router.get('/all', clientController.retrieveAllClients)
router.get('/:client_id', clientController.retrieveClient)
router.post('/', clientController.createClient)
router.patch('/:client_id', clientController.updateClient)
router.patch('/:client_id/block', clientController.blockClient)
router.patch('/:client_id/unblock', clientController.unblockClient)

module.exports = router
