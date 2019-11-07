const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs')

const Users = require('../models/User');

module.exports = function(passport){
  passport.use(new LocalStrategy({
    usernameField: 'user[email]',
    passwordField: 'user[password]',
  }, (email, password, done) => {
    Users.findOne({ email : email })
      .then((user) => {
        if(!user || !user.validatePassword(password)) {
          return done(null, false, { errors: { 'Email or Password': 'is invalid' } });
        }

        bcrypt.compare(password, user.password , (erro, confirm) => {
          if(confirm){
            return done(null, user)
          }else{
            return done(null, false , {message: "Credenciais nao batem"})
          }
        })

      }).catch(done);

      passport.serializeUser((Users , done) =>{
        done(null, users.id)
      })
  }
  ));
}