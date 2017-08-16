var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
	//selecting everything from the table and displaying
  selectAll: function(tableInput, callback) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, response) {
      if (err) {
        throw err;
      }
      callback(response);
    });
  },
  insertOne: function(table, cols, vals, callback) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, response) {
      if (err) {
        throw err;
      }
      callback(response);
    });
  },
  
  updateOne: function(table, objColVals, status, callback) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += status;

    console.log(queryString);
    connection.query(queryString, function(err, response) {
      if (err) {
        throw err;
      }

      callback(response);
    });
  },
};

//exporting the orm object for the model burger.js
module.exports = orm;