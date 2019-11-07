const express = require('express');
const passport = require('passport');

const UserController = require('../controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.destroy);

routes.get('/login', (req, res) => {
    res.render('users/login');
})
routes.post('/login', (req, res, next) =>{
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: 'login',
        failureFlash: true
    })(req, res, next)
})

module.exports = routes;