//Install express server
const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const articles = require('./routes/articles');
const config = require('./config/database');

//mongodb middleware 
const connect = mongoose.connect(config.uri, {useNewUrlParser: true});
// const connect = mongoose.createConnection(config.uri);

// connect.on('connected',()=>{
mongoose.connection.on('connected',()=>{
  console.log("Database connection ready");
});

mongoose.connection.once('open',()=>{
    console.log("- connection open -");
})

// connect.on('error',(err)=>{
mongoose.connection.on('error',(err)=>{
  console.log("database error: " + err)
})

//enable cors middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  //res.header('Access-Control-Allow-Headers', 'Authorization');
  next();
}
app.use(allowCrossDomain);

//bodyparser middleware
app.use(bodyParser.json({limit: '16mb'})); //,{limit: '16mb'}
// app.use(express.bodyParser({limit: '50mb'}));

//serve static files, this is the base of our front end: aka the angular app
var distDir = __dirname + "/dist/hyperion/";
app.use(express.static(distDir));

//routes middelware
app.use('/article', articles);

// res.sendFile(path.join(__dirname+'/dist/hyperion/index.html'));
// });

var server = app.listen(process.env.PORT || 3000,()=>{
    console.log("App now running on port", server.address().port);
    console.log(__dirname)
});