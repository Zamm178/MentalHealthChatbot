const express = require('express')

const ReplyCtrl = require('../controllers/reply-ctrl')

const router = express.Router()

router.post('/reply', ReplyCtrl.createReply) // Admin only
router.get('/reply', ReplyCtrl.getReply)

module.exports = router
