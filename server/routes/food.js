const express = require('express')
const router = express.Router()
const FoodController = require('../controllers/FoodController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
    
router.get('/', authentication, )


module.exports = router