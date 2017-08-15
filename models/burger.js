var orm = require("../config/orm");

//burger object
var burger = {
	all: function(callback) {
		orm.all("burgers," function(results){
			cb(results);
		});
	},

	//the variables columns and values are arrays.
	create: function(columns, values, callback) {
		orm.create("burgers", columns, values, function (results) {
			cd(results);
		});
	},

	update: function(objectColumnValues, condition, callback) {
		orm.update("burgers", objectColumnValues, condition, function(results) {
			cb(results);
		});
	},
};

module.exports = burger;