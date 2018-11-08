const express = require('express')
const router = express.Router()
const PeopleController = require('../app/Controllers/PeopleController')

router.get('/people', PeopleController.index)
router.post('/people', PeopleController.store)
router.get('/people/:id', PeopleController.find)
router.delete('/people/:id', PeopleController.destroy)


module.exports = router
