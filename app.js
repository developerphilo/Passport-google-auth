const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const keys=require('./config/keys');

const app = express();

// set the view engine

app.set('view engine','ejs');


// connect to mongodb

mongoose.connect(keys.mongoDb.dbURI,()=>{
    console.log('connected to mongoDB');
})
app.use('/auth',authRoutes);

// home route
app.get('/',(req,res)=>{
    res.render('home')
})
app.listen(3000,()=>{
    console.log('app is running on port 3000');
})