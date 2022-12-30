require('dotenv').config()
const express = require('express')
const router = express.Router()

const { queryController } = require('../controllers/')
const {
  allowEmployee,
  allowAdmin,
  allowHR,
  allowBothAdminAndHR,
} = require('../middlewares')

router.get(
  '/all/client/:client_id',
  allowEmployee,
  queryController.getAllQueriesOfAClient
)

router.get(
  '/all/active',
  allowEmployee,
  queryController.getAllQueriesOfActiveClients
)

router.get(
  '/all/active/time',
  allowEmployee,
  queryController.retrieveAllQueriesInGivenTime
)

router.get(
  '/all/blocked/time',
  allowEmployee,
  queryController.retrieveAllQueriesInGivenTimeBlocked
)

router.get(
  '/all/blocked',
  allowEmployee,
  queryController.getAllQueriesOfBlockedClients
)

router.get(
  '/all/unassigned/active',
  allowEmployee,
  queryController.getAllUnassignedQueriesActive
)

router.get(
  '/all/created_unassigned',
  allowEmployee,
  queryController.getQueriesCreatedUnAssigned
)

router.get(
  '/all/running_no_followup',
  allowEmployee,
  queryController.getQueriesRunningNoFollowup
)

router.get(
  '/all/unassigned/blocked',
  allowEmployee,
  queryController.getAllUnassignedQueriesBlocked
)

router.get(
  '/all/employee',
  allowEmployee,
  queryController.getAllQueriesAssignedToEmployee
)

router.get('/:query_id', allowEmployee, queryController.getQuery)

router.post('/', allowEmployee, queryController.createQuery)

router.patch('/assign', allowEmployee, queryController.assignQueryToEmployee)

router.patch('/:query_id', allowEmployee, queryController.updateQuery)

router.patch(
  '/status/:query_id',
  allowEmployee,
  queryController.updateQueryStatus
)

module.exports = router
