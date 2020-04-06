const jwt = require('jsonwebtoken')
const { compare } = require('../helpers/bcrypt')
const { User } = require('../models')

class UserController {

    static register(req, res) {
        const { email, password } = req.body
        let option = { where: { email } }
        User.findOne(option)
            .then(data => {
                if (data) {
                    res.status(400).json({
                        msg: 'User already exixt'
                    })
                } else {
                    return User.create({ email, password })
                }
            })
            .then(user => {
                res.status(201).json({ id: user.id, email: user.email })
            })
            .catch(err => {
                console.log('error dong');
                res.status(500).json(err)
            })
    }

    static login(req, res) {
        const { email, password } = req.body
        const option = { where: { email } }
        User.findOne(option)
            .then(user => {
                if (!user) {
                    res.status(404).json({
                        msg: 'User tidak terdaftar'
                    })
                } else {
                    if (compare(password, user.password)) {
                        const token = jwt.sign({
                            id: user.id,
                            email: user.email
                        }, 'secret')
                        res.status(200).json({ token })
                    } else {
                        res.status(400).json({
                            msg: 'Password salah'
                        })
                    }
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = UserController