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
      friendsGoing: String,
      signedUp: String,          // val used to determine if event was signed up for
      identifier: String         // random String generated, which is used to idetify each event
    }
});

const uModel = mongoose.model("event", eventSchema);

console.log("event model online");
module.exports = eventSchema;
