// Use Express Module
var express = require("express");

// Declares out server as an express server and sets port(Heroku or 8080)
var app = express();
var PORT = process.env.PORT || 8080;

// Sets express up to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Require the two routing .js files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Start the server!
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  