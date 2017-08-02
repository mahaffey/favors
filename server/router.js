const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')
const Favor = require('./controllers/favor')
const User = require('./controllers/user')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function (app) {
  app.get('/', requireAuth, function (req, res) {
    res.send({ message: 'Token is valid' })
  })

  app.post('/api/v1/signin', requireSignin, Authentication.signin)
  app.post('/api/v1/signup', Authentication.signup)
  app.get('/api/v1/users', requireAuth, User.getUsers)
  app.get('/api/v1/users/:id', requireAuth, User.getUser)

  app.get('/api/v1/favors', requireAuth, Favor.getFavors)
  app.get('/api/v1/favors/:id', requireAuth, Favor.getFavor)
  app.post('/api/v1/favors/new', requireAuth, Favor.newFavor)

}
