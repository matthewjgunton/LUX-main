const mongoose = require("mongoose");
const schema = mongoose.Schema;


//create schema and model

const eventSchema = new schema({
    eventName: String,
    provider: String,
    event: {
      timeRelevance: String,
      genre: String,
      place: String,
      friendsGoing: String
    }
});

const uModel = mongoose.model("event", eventSchema);

console.log("event model online");
module.exports = eventSchema;
