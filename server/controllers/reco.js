var User = require('../models/users.js');
var data = require("../dummyData.js");

exports.whatIsDate = (req, res) =>{
  const date = new Date();

  return res.json({date: date});
}

//set a new first preference
exports.setPref = (req, res) => {

  const {pref} = req.body;

  console.log(pref);

  User.findAndUpdate({_id: req.user.matthew._id}, {pref: pref}, () => {
    console.log("success?");
  });


}

//find what the user wanted first
exports.retrieveCurrentPref = (req, res) => {

  const genres = ["sports", "social", "academic", "club", "sponsored"];

  return res.json({data: genres, error: false});


}

exports.findEvents = (req, res) =>{
  const date = new Date();
  //for now assume the dummy data is always correct:

  ranking(data);

}

function ranking(events){

  var counter
  var dateWeight = 1;
  var genreWeight = 1;
  var friendsWeight = 1;
  var signedUpWeight = -1;

  try{

    for (var i = 0; i < envents.length; i++) {
      counter = 1;
      if (events[i].signedUp == true) {
        counter *= signedUpWeight;
      }
      if (events[i].timeRelevance == date) {
       counter += (1 * dateWeight);
      }
      if (events[i].genre == genre) {
       counter += (1 * genreWeight);
      }
      counter += (events[i].friendsGoing.length * friendsWeight);

    }
      return res.json({error: null, data: events.sort(-1)});
  }
    catch(e){
      return res.json({error: true});
  }

}
