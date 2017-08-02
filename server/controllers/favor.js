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

            function volunteerInfo (favor) {
                if (favor.volunteer === null) {
                    return null
                } else {
                    return { _id: favor.volunteer._id,
                        email: favor.volunteer.email,
                        firstName: favor.volunteer.firstName,
                        lastName: favor.volunteer.lastName,
                        rep: favor.volunteer.rep,
                        wallet: favor.volunteer.wallet,
                        admin: favor.volunteer.admin,
                        __v: favor.volunteer.__v}
                }
            }

            let protectedFavors = favors.map((el) => {
                return {
                    _id: el._id,
                    posted_by: {
                        _id: el.posted_by._id,
                        email: el.posted_by.email,
                        firstName: el.posted_by.firstName,
                        lastName: el.posted_by.lastName,
                        rep: el.posted_by.rep,
                        wallet: el.posted_by.wallet,
                        admin: el.posted_by.admin,
                        __v: el.posted_by.__v
                    },
                    volunteer: volunteerInfo(el),
                    poster_is_offering_favor: el.poster_is_offering_favor,
                    description: el.description,
                    description_long: el.description_long,
                    category: el.category,
                    cost: el.cost,
                    due_date: el.due_date,
                    image: el.image,
                    __v: el.__v,
                    minimum_rep: el.minimum_rep,
                    is_completed: el.is_completed,
                }
            })

            res.send(protectedFavors)
        }
    })
}



exports.getFavor = function (req, res, next) {
    Favor.findOne({_id: req.params.id}).populate('posted_by').exec((err, favor) => {
        if (err) {
            throw err
        }
        else {

        function volunteerInfo (favor) {
            if (favor.volunteer === null) {
                return null
            } else {
                return {
                    _id: favor.volunteer._id,
                    email: favor.volunteer.email,
                    firstName: favor.volunteer.firstName,
                    lastName: favor.volunteer.lastName,
                    rep: favor.volunteer.rep,
                    wallet: favor.volunteer.wallet,
                    avatar: favor.volunteer.avatar,
                    admin: favor.volunteer.admin,
                    __v: favor.volunteer.__v}
            }
        }

            let protectedFavor = {
                _id: favor._id,
                posted_by: {
                    _id: favor.posted_by._id,
                    email: favor.posted_by.email,
                    firstName: favor.posted_by.firstName,
                    lastName: favor.posted_by.lastName,
                    rep: favor.posted_by.rep,
                    wallet: favor.posted_by.wallet,
                    avatar: favor.posted_by.avatar,
                    admin: favor.posted_by.admin,
                    __v: favor.posted_by.__v
                },
                volunteer: volunteerInfo(favor),
                poster_is_offering_favor: favor.poster_is_offering_favor,
                description: favor.description,
                description_long: favor.description_long,
                category: favor.category,
                cost: favor.cost,
                due_date: favor.due_date,
                image: favor.image,
                __v: favor.__v,
                minimum_rep: favor.minimum_rep,
                is_completed: favor.is_completed,
            }


            res.send(protectedFavor)
        }
    })
}

exports.newFavor = function (req, res, next) {
    const posted_by = req.body.posted_by.id
    const poster_is_offering_favor = req.body.poster_is_offering_favor
    const description = req.body.description
    const description_long= req.body.description_long
    const category = req.body.category
    const cost = req.body.cost
    const minimum_rep = req.body.minimum_rep
    const due_date =  req.body.due_date
    const image = req.body.image

    // console.log(req.body)
    const favor = new Favor({
        posted_by: posted_by,
        volunteer: null,
        poster_is_offering_favor: poster_is_offering_favor,
        description: description,
        description_long: description_long,
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

    })

}
