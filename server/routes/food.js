const express = require('express')
const router = express.Router()
const FoodController = require('../controllers/FoodController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
    
router.get('/', authentication, FoodController.getAll)
router.post('/', authentication, FoodController.addFood)
router.delete('/:id', authentication, authorization, FoodController.delete)

module.exports = router