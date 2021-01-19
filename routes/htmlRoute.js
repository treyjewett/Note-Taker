// Dependencies
const path = require('path');

// Direct the app what to do when a user visits a certain url while on the server.
module.exports = function(app) {
    
    // This directs to the "notes" page.
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // If the user inputs something that doesn't match any file path, they are brought to the home page.
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}