var express = require("express");
var sendRoutes = express.Router();//required to make this separate file works

const controller = require("../controllers/auth.js");

sendRoutes.route("/status")
  .get(controller.checkStatus);

sendRoutes.route("/facebook")
  .get(controller.googleLogin);

sendRoutes.route("/facebook/callback")
  .get(controller.googleCallback);

sendRoutes.route("/logout")
  .get(controller.logout);

module.exports = sendRoutes;
