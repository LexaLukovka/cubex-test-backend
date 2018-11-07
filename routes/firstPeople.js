const express = require('express')
const router = express.Router()
const FisrstPeopleController = require('../app/Controllers/FisrstPeopleController')

router.post('/first', FisrstPeopleController.store)

module.exports = router
