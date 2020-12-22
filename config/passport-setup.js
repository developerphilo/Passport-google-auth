const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
// import the keys here
const keys =require('./keys');

const User = require('../models/user-model');

passport.use(new googleStrategy({

    // options for the google start 
    clientID: keys.google.clientID,
    clientSecret:keys.google.clientSecret,


    // google strategy option
    callbackURL:'/auth/google/redirect', 

},(accessToken,refreshToken,profile,done)=>{
    // passport callback function
    console.log('passport callback function fired'),
    // get back the user profile info
    console.log(profile)

    // save new user to mongodb

    new User({
        username: profile.displayName,
        googleId: profile.id
    }).save().then((newUser)=>{
        console.log("new user created:" + newUser);
    })
})
)