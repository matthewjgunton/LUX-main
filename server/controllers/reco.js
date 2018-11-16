var User = require('../models/users.js');
var data = require("../dummyData.js");

exports.whatIsDate = (req, res) =>{
  const date = new Date();

  return res.json({date: date});
}

//set a new first preference
exports.setPref = (req, res) => {




}

//find what the user wanted first
exports.retrieveCurrentPref = (req, res) => {

  const genres = ["sports", "social", "academic", "club", "sponsored"];


}

exports.findEvents = (req, res) =>{
  const date = new Date();
  //for now assume the dummy data is always correct:

  ranking(data);

}

function ranking(events){

  /*
var date;       variables of event, don't need cause its above
var genre;
var friends;
var counter; */

var dateWeight = 1;
var genreWeight = 1;
var friendsWeight = 1;
var signedUpWeight = -1;
  
if (events.signedUp == true) {        // if event is taged as signed up, counter is negative, making it last
  counter = counter * signedUpWeight; // could remove all negative values from array so that they don't show up at all
}
if (events.timeRelevance == date) {
   counter = counter + (1 * dateWeight);
}
if (events.genre == genre) {
   counter = counter + (1 * genreWeight);
}
counter += (events.friendsGoing.length * friendsWeight);


}
