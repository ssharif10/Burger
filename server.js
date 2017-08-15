var express = require ("express");
var methodOverride = require ("method-override");
var bodyParser = require ("body-parser");

//establishing the port we will be using
var port = process.env.PORT || 3000;

//setting express to the variable "app"
var app = express();

app.use(express.static("public"));

app.use(methodOverride("_method"));

//requiring handlbars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("../controllers/burgers_controllers.js");

app.use("/" routes);

ap.listen(port);

