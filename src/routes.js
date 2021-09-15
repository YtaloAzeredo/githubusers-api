const {Router} = require('express')
const UserController = require('./app/controllers/UserController')

const router = new Router()

router.get('/users/:username', UserController.show)

module.exports = router