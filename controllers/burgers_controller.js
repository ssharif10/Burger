var express = require("express");

//importing burger.js model for use of database functions
var burger = require(".../models/burger.js");

var router = express.Router();

//displaying burgers in database
router.get("/", function (request, response) {
	burger.all(function(data) {
		var handleBarsOb = {
			burgers: data
		};
		console.log(handleBarsOb);
		res.render("index", handleBarsOb);
	});
});

//adds new burger to database
router.post("/", function (request, response) {
	burger.create([
		"burger_name", "devoured"
		], [
		  req.body.name, require.body.devoured
		], function() {
			//brings user back to beginning of process to enter another burger
		  res.redirect("/");
		});
});
	

//changes the status of the burger
router.put("/:id", function(request, response) {
	var status = "id = " + req.params.id;

	console.log("status", status);
	burger.update({
		devoured: req.body.devoured
	}, status, function() {
		res.redirect("/");
	});
});

// Export routes for server.js to use.
module.exports = router;