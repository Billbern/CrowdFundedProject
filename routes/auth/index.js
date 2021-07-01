const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');

const db = require('../../config/database');
const logger = require('../../config/logger');
const passport = require('../../config/passport');
const User = db.models.users;

route.get('/login', (req, res)=>{
    return res.render('auth/login', {title: "Login"});
})

route.post('/login', passport.authenticate('local', {
    successRedirect: '/', failureRedirect: '/auth/login'
}));

route.get('/register', (req, res)=>{
    return res.render('auth/signup', {title: "Register"});
})

route.post('/register', async(req, res)=>{
    const reqBody = {username: req.body.user_name, email: req.body.user_mail, password: req.body.user_pass}
    try {
        const salt = await bcrypt.genSalt(10);
        reqBody.password = await bcrypt.hash(reqBody.password, salt);

        if(reqBody.password){
            const newUser = await User.create(reqBody);
            logger.info(`New User's id is ${newUser.id}`);
        }

        return res.redirect('/auth/login');
    } catch (err) {
        logger.error(err);
        return res.redirect('/auth/register');
    }
})

module.exports = route;