const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/shelters', controllers.getAllShelters)

router.get('/shelters/:id/cats', controllers.getCatsInShelter)

router.post('/cats', controllers.createCat)

router.delete('/cats/:id', controllers.deleteCat)

module.exports = router
