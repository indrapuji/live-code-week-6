const { Food } = require('../models')

class FoodController {

    static getAll(req, res) {
        Food.findAll()
            .then(food => {
            res.status(201).json(id: food.id, title: food.title, price": 10000, "ingredients": "Ayam, Madu, Kecap", "tag": "ayam", "UserId": 1)
        })
    }

}

module.exports = FoodController