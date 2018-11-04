var express = require("express");
var app = express();
var session = require('express-session');//to store information between links from user
var MongoStore = require('connect-mongo')(session);
var mongoStore = new MongoStore({url: 'mongodb://localhost/recreationProject'});
var passport = require("passport");//for identification

// app.set("view engine", 'ejs');

//connecting to db
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/LUX", function(err){
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

//will this app work without bodyParser instead with bus boy?
var fileupload = require("express-fileupload");
app.use(fileupload());

app.use("/", express.static(__dirname+"/public") );

const rtSchedule = require("./routes/rtMain.js");
app.use(rtSchedule);

app.listen(5000);
console.log("lift off");
