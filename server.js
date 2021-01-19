// Set up the dependencies.
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'))

// Setting up routes for when the user inputs their notes.
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

// Runs the server.
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});