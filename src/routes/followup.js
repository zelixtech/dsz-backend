require('dotenv').config()
const express = require('express');
const router = express.Router();

const { followupController } = require('../controllers/');

router.get('/all/:query_id', followupController.getFollowupsForQuery)
router.post('/', followupController.createFollowup)
router.patch('/:followup_id', followupController.updateFollowup)


module.exports = router
