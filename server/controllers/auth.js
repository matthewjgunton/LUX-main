var passport = require("passport");
var userModel = require("../models/users.js");

exports.facebookLogin = passport.authenticate('facebook', {scope: ['public_profile', 'email']});

exports.facebookCallback = passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/'
})

exports.googleLogin = passport.authenticate('google', {scope: ['profile', 'email']});

exports.googleCallback = passport.authenticate('google', {
  //have yet to decide what the success callback function will be
  successRedirect: '/status',
  failureRedirect: '/',
  failureFlash: true
})

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
}

exports.checkStatus = (req, res)=>{
  console.log('reached!');
  //need to add in error handling
  if(req.user){
    return res.status(200).json( {loggedIn: true, userData: req.user} );
  }else{
    return res.status(200).json( {loggedIn: false, userData: null} );
  }
}
