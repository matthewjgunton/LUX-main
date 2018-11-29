var User = require('../models/users.js');
var data = require("../dummyData.js");

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('xxxxxxxxxxx');

exports.whatIsDate = (req, res) =>{
  const date = new Date();

  return res.json({date: date});
}

exports.email = (req, res) => {

  const {event} = req.body;

  const stickerMessage = event;

  try{
    const msg = {
        to: req.user.matthew.email,
        from: '"LUX App" <mjg422@lehigh.edu>',
        subject: '😊 We Found Your Item 😊',
        text: stickerMessage,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      console.log('sent');
      sgMail.send(msg);
      return res.status(201).json({error: false});
  }
  catch(e){
    console.log(e);
    return res.status(400).json({error: true});      
  }

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

  var mattData = ranking(data);
  return res.json(mattData);

}

function ranking(events){

  var counter
  var dateWeight = 1;
  var genreWeight = 1;
  var friendsWeight = 1;
  var signedUpWeight = -1;

  try{
    for (var i = 0; i < events.length; i++) {
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
      return {error: null, data: events.sort()};
  }
    catch(e){
      return {error: true};
  }

}

  // NOTE: These functions as of right now are not called, not sure when we want to call them
  // generates random string for the event, used to distinguish event from others
  function identify(events) {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var size = 10;
    for (var i = 0; i < events.length; i++) {
      for (var j = 0; j < size; i++) {
        events[i].identifier += possible.charAt(Math.floor(Math.random() * size));
      }
    }
  }

  // checks if any events have same identifier
//   function checkEvents(events) {
//
//     //commented out for now so that we can make the front-end back-end work simply
//
//   //   for (var i = 0; i < events.length-1; i++) {
//   //     if (events[i].identifier.equals(events[1+1].identifier) {
//   //         identify(events); // if so changes all of the elements again
//   //                           // pretty basic and inefficient, can be changed later
//   //     }
//   //   }
//   // }
//
// }
