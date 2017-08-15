var express = require("express");

//importing burger.js model for use of database functions
var burger = require(".../models/burger.js");

var router = express.Router();

router.get("/", function (require, result) {
	burger.all(function(data) {
		var handleBarsOb = {
			burgers: data
		};
		console.log(handleBarsOb);
		res.render("index", handleBarsOb);
	})
})
