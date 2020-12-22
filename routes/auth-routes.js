const router = require('express').Router();
const passport = require('passport');

// set the log in route
router.get('/login',(req,res)=>{
    res.render('login');

});

// logout
router.get('/logout',(req,res)=>{
    // handle with passport
    res.send('logging out ...');

});
// auth with google
router.get('/google',passport.authenticate('google',{
    // what to retreive from the user info
    scope:['profile']
}));
// callback route to google for redirect to ND google to authenticate the code to get profile information
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('you reached the callback URI')
})
module.exports=router;
 