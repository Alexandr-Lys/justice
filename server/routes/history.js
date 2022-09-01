const express = require('express')
const controller = require('../controllers/history')
const router = express.Router()

router.post('/', controller.getAll)
router.post('/create', controller.create)

module.exports = router
