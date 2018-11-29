//this is where the basic routes will go
var express = require("express");
var sendRoutes = express.Router();//required to make this separate file works

const controller = require("../controllers/reco.js");

sendRoutes.route("/setPreferences")
  .get(controller.retrieveCurrentPref)
  .post(controller.setPref);

sendRoutes.route("/getData")
  .get(controller.findEvents);


module.exports = sendRoutes;
