const { Food } = require('../models')

const authorization = function (req, res, next) {
    let id = req.params.id
    let option = { where: { id } }
    Food.findOne(option)
        .then(data => {
            if (!data) {
                res.status(404).json({
                    msg: 'Food not found'
                })
            } else {
                if (data.userId === req.user.id) {
                    next()
                } else {
                    res.status(400).json({
                        msg: 'Forbidden access'
                    })
                }
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

module.exports = authorization