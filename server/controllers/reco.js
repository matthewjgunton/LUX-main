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
  
if (events.timeRelevance == date) {
   counter++;
}
if (events.genre == genre) {
   counter++;
}
counter += events.friendsGoing.length;


}
