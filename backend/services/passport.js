var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../schemas/User.js');


passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function (username, password, done) {
  User.findOne({username: username})
  .exec(function (error, user) {
    if (error) done(error);
    if(!user) return done(null, false);
    if(user.verifyPassword(password)) return done(null, user);
    return done(null, false);
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user._id);
})

passport.deserializeUser(function (_id, done) {
  User.findById(_id, function (error, user) {
    done(error, user)
  });
});

module.exports = passport;
