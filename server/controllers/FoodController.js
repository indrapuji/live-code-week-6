const { Food } = require('../models')

class FoodController {

    static getAll(req, res) {
        let option = { where: { userId: req.user.id } }
        Food.findAll(option)
            .then(food => {
                res.status(201).json(food)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static addFood(req, res) {
        const { title, price, ingredients, tag } = req.body
        Food.create({ title, price, ingredients, tag })
            .then(food => {
                res.status(201).json(food)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static delete(req, res) {
        let option = { where: { id: req.params.id } }
        Food.findOne(option)
            .then(food => {
                if (!food) {
                    res.status(404).json({
                        msg: 'Food not found'
                    })
                } else {
                    return Food.destroy(option)
                }
            })
            .then(() => {
                res.status(200).json({
                    msg: 'Successfully delete food from your menu'
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

}

module.exports = FoodController