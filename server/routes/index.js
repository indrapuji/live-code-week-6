const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const FoodsRouter = require('./food')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use('/foods', FoodsRouter)

module.exports = router