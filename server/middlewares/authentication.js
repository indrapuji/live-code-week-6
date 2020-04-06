const jwt = require('jsonwebtoken')

const authentication = function (req, res, next) {
    try {
        const { token } = req.headers
        if (!token) {
            res.status(404).json({
                msg: 'Token not found'
            })
        } else {
            const decoded = jwt.verify(token, 'secret')
            req.user = decoded
            next()
        }
    } catch (error) {
        res.status(400).json({
            msg: 'Forbiden Access'
        })
    }
}

module.exports = authentication