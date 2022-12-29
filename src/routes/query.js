require('dotenv').config()
const express = require('express')
const router = express.Router()

const { queryController } = require('../controllers/')

router.get('/all/client/:client_id', queryController.getAllQueriesOfAClient)
router.get('/all/active', queryController.getAllQueriesOfActiveClients)
router.get('/all/active/time', queryController.retrieveAllQueriesInGivenTime)
router.get(
  '/all/blocked/time',
  queryController.retrieveAllQueriesInGivenTimeBlocked
)
router.get('/all/blocked', queryController.getAllQueriesOfBlockedClients)
router.get(
  '/all/unassigned/active',
  queryController.getAllUnassignedQueriesActive
)
router.get(
  '/all/created_unassigned',
  queryController.getQueriesCreatedUnAssigned
)
router.get(
  '/all/running_no_followup',
  queryController.getQueriesRunningNoFollowup
)
router.get(
  '/all/unassigned/blocked',
  queryController.getAllUnassignedQueriesBlocked
)
router.get('/all/employee', queryController.getAllQueriesAssignedToEmployee)
router.get('/:query_id', queryController.getQuery)
router.post('/', queryController.createQuery)
router.patch('/assign', queryController.assignQueryToEmployee)
router.patch('/:query_id', queryController.updateQuery)
router.patch('/status/:query_id', queryController.updateQueryStatus)

module.exports = router
