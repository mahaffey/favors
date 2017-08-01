const User = require('../models/user')

exports.getUser = function (req, res, next) {
    User.findOne({_id: req.user._id}, function (err, user) {
        if (err) {
            throw err
        }
        else {
            let protectUserPassword = {
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                rep: user.rep,
                wallet: user.wallet,
                admin: user.admin,
                __v: user.__v
            }

            res.send(protectUserPassword)
        }
    })

}

exports.getUsers = function (req, res, next) {
    User.find({}, function (err, users) {
        if (err) {
            throw err
        } else {
            let protectedUsers = users.map((el) => {
                return {
                    _id: el._id,
                    email: el.email,
                    firstName: el.firstName,
                    lastName: el.lastName,
                    rep: el.rep,
                    wallet: el.wallet,
                    admin: el.admin,
                    __v: el.__v}
                }
            )
            res.send(protectedUsers)
        }
    })
}
