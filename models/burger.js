var orm = require("../config/orm.js");

//burger object
var burger = {
	selectAll: function(callback) {
		orm.selectAll("burgers", function(response){
			callback(response);
		});
	},

	//the variables columns and values are arrays.
	insertOne: function(columns, values, callback) {
		orm.insertOne("burgers", columns, values, function (response) {
			callback(response);
		});
	},

	updateOne: function(objectColumnValues, status, callback) {
		orm.updateOne("burgers", objectColumnValues, status, function(response) {
			callback(response);
		});
	},
};

module.exports = burger;