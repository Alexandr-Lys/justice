const express = require('express')
const controller = require('../controllers/wallet')
const router = express.Router()

router.get('/:id', controller.getWallet)
router.patch('/:id', controller.update)

module.exports = router
