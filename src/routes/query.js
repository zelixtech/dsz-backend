require('dotenv').config()
const express = require('express')
const router = express.Router()

const { queryController } = require('../controllers/')

router.get('/all/client/:client_id', queryController.getAllQueriesOfAClient)
router.get('/all', queryController.getAllQueries)
router.get('/all/unassigned', queryController.getAllUnassignedQueries)
router.get('/all/employee', queryController.getAllQueriesAssignedToEmployee)
router.get('/:query_id', queryController.getQuery)
router.post('/', queryController.createQuery)
router.patch('/assign', queryController.assignQueryToEmployee)
router.patch('/:query_id', queryController.updateQuery)
router.patch('/status/:query_id', queryController.updateQueryStatus)
router.get('/', queryController.getThings)

module.exports = router
