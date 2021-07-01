const express = require('express');
const route = express.Router();

const auth = require('./auth');
route.use('/auth',  auth);

route.get('/', (req, res)=>{
    let data = {};
    data.loggedIn = req.isAuthenticated();
    return res.render('home', {title: "Welcome", data: data});
})

module.exports = route;