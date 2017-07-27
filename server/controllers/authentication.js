const jwt = require('jwt-simple')
const User = require('../models/user')

function tokenForUser (user) {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, 'mysupersecret')
}

exports.signin = function (req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  console.log('auth.sign', req.user)
  res.status(200).send({ token: tokenForUser(req.user) })
}

exports.signup = function (req, res, next) {
  const email = req.body.email
  const password = req.body.password
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const birth = req.body.birth
  const radius = req.body.radius
  const zip = req.body.zip
  const rep = 10
  const wallet = 10
  const admin = false


  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'})
  }

  // See if a user with the given email exists
  User.findOne({ email: email }, function (err, existingUser) {
    if (err) { return next(err) }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' })
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
      admin: admin
    })
    console.log('creating new user', user)
    user.save(function (err) {
      if (err) { return next(err) }

      // Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) })
    })
  })
}
