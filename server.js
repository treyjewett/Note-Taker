// Set up the dependencies.
const express = require('express');

// Setting "app" to express to make calling express easier.
const app = express();

// Setting up the PORT for the server to "listen" on.
const PORT = process.env.PORT || 8080;

// This tells the app what to use while running.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'))

// Requiring the js files to run the app.
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

// Runs the server.
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});