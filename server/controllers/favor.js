const Favor = require('../models/favor')
const User = require('../models/user')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


exports.getFavors = function (req, res, next) {
    Favor.find().populate('posted_by').exec((err, favors) => {
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
    const volunteer = req.body.volunteer
    const poster_is_offering_favor = req.body.poster_is_offering_favor
    const description = req.body.description
    const category = req.body.category
    const cost = req.body.cost
    const minimum_rep = req.body.minimum_rep
    const due_date =  req.body.due_date
    const image = req.body.image

    const favor = new Favor({
        posted_by: posted_by,
        volunteer: volunteer,
        poster_is_offering_favor: poster_is_offering_favor,
        description: description,
        category: category,
        cost: cost,
        minimum_rep: minimum_rep,
        due_date: due_date,
        image: image
    })

    favor.save(function (err, newFavor) {
        if (err) { return next(err) }

        Favor.findById(newFavor._id).populate('posted_by').exec((err, populatedFavor) => {
            res.json({ favor: populatedFavor })
        })
        // Respond to request indicating the favor was created

    })

}
