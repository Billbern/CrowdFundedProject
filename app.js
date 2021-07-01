require('dotenv').config();
const path = require('path');
const moment = require('moment');
const express = require('express');
const logger = require('./config/logger');
const session = require('express-session');
const sesStore = require('connect-session-sequelize')(session.Store);

const app = express();
app.locals.moment = moment;
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 9060);
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,  '/assets')));
app.disable('x-powered-by');

const db = require('./config/database');
const passport = require('./config/passport');

app.use(session({
    name: 'sessionName',
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    store: new sesStore({db: db})
}));
app.use(passport.initialize());
app.use(passport.session());


const home =  require('./routes');
app.use('/',  home);

app.get('*', (req, res)=>{
    return res.render('pagenotfound',  {title: 'Page not found'});
})

app.listen(app.get('port'), async()=>{
    try {
        await db.authenticate();
        await db.sync({alter: true});
    } catch (err) {
        logger.error(err);
    }
    logger.info(`Application started on port ${app.get('port')}`);
})