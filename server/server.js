var express = require("express");
var app = express();
var session = require('express-session');//to store information between links from user
var MongoStore = require('connect-mongo')(session);
var mongoStore = new MongoStore({url: 'mongodb://localhost/LUX'});
var passport = require("passport");//for identification

var fs = require('file-system');
var path = require("path");
var https = require('https')

// app.set("view engine", 'ejs');

//small but important fix:
//very, very important!
//DO NOT KEEP THIS IN IF IT GOES INTO PRODUCTION
var certOptions = {
  key: fs.readFileSync(path.resolve('server.key')),
  cert: fs.readFileSync(path.resolve('server.crt'))
}

//connecting to db
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/LUX", { useNewUrlParser: true }, function(err){
  if(err){
		console.log("failed to connect to DB");

	}else{
		console.log("connection success");
	}
});

require("./config/dbConfig.js");

//set up users
require("./config/passport.js")(passport);

app.use(session({//set up session to our specifications
  secret: 'secret',
  store: mongoStore,
  saveUninitialized: true,
  resave: true,
  cookie : { secure : false, maxAge : (2 * 60 * 60 * 1000) }
}));//for authenticating users
app.use(passport.initialize());//starts passport
app.use(passport.session());//allows authentication info to pass between pages

var bodyParser = require("body-parser");
app.use(bodyParser.json());//it now says body works

const rtAuth = require("./routes/rtAuth.js");
app.use("/auth", rtAuth);

const rtReco = require("./routes/rtReco.js");
app.use("/reco", rtReco);

var server = https.createServer(certOptions, app).listen(5000)
console.log("lift off");
