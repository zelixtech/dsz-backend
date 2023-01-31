require('dotenv').config()
const express = require('express')
const router = express.Router()
const {
  allowEmployee,
  allowAdmin,
  allowHR,
  allowBothAdminAndHR,
} = require('../middlewares')

const { clientController } = require('../controllers/')

router.get(
  '/all/active',
  allowEmployee,
  clientController.retrieveAllActiveClients
)

router.get(
  '/all/active/time',
  allowEmployee,
  clientController.retrieveAllActiveClientsInGivenTime
)

router.get(
  '/all/blocked/time',
  allowEmployee,
  clientController.retrieveAllBlockedClientsInGivenTime
)

router.get(
  '/all/blocked',
  allowEmployee,
  clientController.retrieveAllBlockedClients
)

router.get('/check', allowEmployee, clientController.checkClientExists)

router.get('/:client_id', allowEmployee, clientController.retrieveClient)

router.post('/', allowEmployee, clientController.createClient)

router.patch('/:client_id', allowEmployee, clientController.updateClient)

router.patch('/:client_id/block', allowEmployee, clientController.blockClient)

router.patch(
  '/:client_id/unblock',
  allowEmployee,
  clientController.unblockClient
)

router.delete('/:client_id', allowEmployee, clientController.deleteClient)

module.exports = router
