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
                    // console.log(email, password);
                    return User.create({ email, password })
                }
            })
            .then(user => {
                console.log(user)
                res.status(201).json(user)
            })
            .catch(err => {
                console.log('error dong');
                res.status(500).json(err)
            })
    }
}

module.exports = UserController