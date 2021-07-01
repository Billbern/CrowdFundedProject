const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const logger = require('../config/logger');
const db = require('../config/database');

const User = db.models.users;

passport.use(new LocalStrategy({usernameField: 'user_name', passwordField: 'user_pass'},
    async function(username, password, done){
        try {
            const user = await User.findOne({ where: {username: username}});
            if(!user){
                logger.info("Incorrect username or password");
                return done(null, false, {message: "Incorrect username or password"})
            }
            if(user){
                const validatePass = await bcrypt.compare(password, user.password);
                if (!validatePass){
                    logger.info("Incorrect username or password");
                    return done(null, false, {message: "Incorrect username or password"});
                }
                logger.info("User found");
                return done(null, user)
            }
        } catch (err) {
            logger.error(err);
            return done(err);
        }
    }
))

passport.serializeUser(function(user, done){
    done(null, user.uuid);
});

passport.deserializeUser( async function(uuid, done){
    try {
        const user = await User.findByPk(uuid);
        if(user){
            done(null, user);
        }
    } catch (err) {
        logger.error(err);
        done(err);
    }
})

module.exports = passport;