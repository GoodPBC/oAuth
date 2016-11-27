/**
 * Created by jpulaski on 11/23/16.
 */
//create local strategy for passportJS

//create local strategy
var LocalStrategy = require('passport-local').Strategy;

//require user model so we can save users to db
var User = require('../app/models/user');

//export to rest of program
module.exports = function(passport) {

    //create a unique identifier for each user by saving session data
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    //bring back all user info
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {   //search our User in mongodb
            done(err, user);
        });
    });
    //create local strategy
    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done){
            process.nextTick(function(){
                User.findOne({'local.username': email}, function(err, user){
                    if(err)
                        return done(err);
                    if(user){
                        return done(null, false, req.flash('signupMessage', 'That email already taken'));
                    } else {
                        var newUser = new User();
                        newUser.local.username = email;
                        newUser.local.password = newUser.generateHash(password);

                        newUser.save(function(err){
                            if(err)
                                throw err;
                            return done(null, newUser);
                        })
                    }
                })

            });
        }));

    passport.use('local-login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done){
            process.nextTick(function(){
                User.findOne({ 'local.username': email}, function(err, user){
                    if(err)
                        return done(err);
                    if(!user)
                        return done(null, false, req.flash('loginMessage', 'No User found'));
                    if(!user.validPassword(password)){
                        return done(null, false, req.flash('loginMessage', 'invalid password'));
                    }
                    return done(null, user);

                });
            });
        }
    ));


};