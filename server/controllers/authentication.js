const jwt = require('jwt-simple')
const User = require('../models/user')
const expressValidator = require('express-validator')

function tokenForUser (user) {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, 'mysupersecret')
}


exports.signin = function (req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  console.log('auth.sign', req.user)
  res.status(200).send({ token: tokenForUser(req.user), user_id: req.user._id })
}

exports.signup = function (req, res, next) {
  const email = req.body.email
  const password = req.body.password
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const birth = req.body.birth
  const radius = req.body.radius
  const zip = req.body.zip
  const avatar = req.body.avatar
  const rep = 10
  const wallet = 10
  const admin = false


  if (!email || !password) {
    return res.send({ errors: {msg: 'You must provide email and password', param: 'email', status: 422}})
  }

  // check if email is a valid email (could be done on frontend...)
  req.checkBody('email', 'You must enter a valid email').isEmail()
  let errors = req.validationErrors()

  if (errors) {
    return res.send({errors: errors[0]})
  } else {

    // See if a user with the given email exists
    User.findOne({ email: email }, function (err, existingUser) {
      if (err) { return next(err) }

      // If a user with email does exist, return an error
      if (existingUser) {
        return res.send({ errors: {msg: 'Email is already in use', param: 'email', status: 422 }})
      }

      // If a user with email does NOT exist, create and save user record
      const user = new User({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        rep: rep,
        wallet: wallet,
        zip: zip,
        radius: radius,
        birth: birth,
        avatar: avatar,
        admin: admin
      })
      console.log('creating new user', user)
      user.save(function (err) {
        if (err) { return next(err) }

        // Respond to request indicating the user was created
        res.json({ token: tokenForUser(user), user_id: user._id })
      })
    })}
}
