const Favor = require('../models/favor')


exports.allFavors = function (req, res, next) {
    Favor.find((err, favors) => {
        if (err) {
            throw err
        }
        else {
            res.send(favors)
        }
    })
}

exports.newFavor = function (req, res, next) {
    const posted_by = req.body.posted_by
    const volunteer = ""
    const offer = req.body.offer
    const description = req.body.description
    const category = req.body.category
    const cost = req.body.cost
    const minimum_rep = req.body.rep
    const due_date =  req.body.date

    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password'})
    }

    // See if a user with the given email exists
    User.findOne({ email: posted_by }, function (err, existingUser) {
        if (err) { return next(err) }

        // If a user with email does exist, return an error
        if (!existingUser) {
            return res.status(422).send({ error: 'User not found' })
        }

        // If a user with email does NOT exist, create and save user record
        const favor = new Favor({
            posted_by: existingUser,
            volunteer: volunteer,
            offer: offer,
            description: description,
            category: category,
            cost: cost,
            minimum_rep: minimum_rep,
            due_date: due_date
        })

        favor.save(function (err) {
            if (err) { return next(err) }

            // Respond to request indicating the favor was created
            res.json({ favor: favor })
        })
    })
}
