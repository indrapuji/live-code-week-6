const { Food } = require('../models')

class FoodController {

    static getAll(req, res) {
        Food.findAll()
            .then(food => {
                res.status(201).json(food)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

}

module.exports = FoodController