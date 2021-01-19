let noteData = require('../db/db.json');
const fs = require('fs');

module.exports = function(app) {
    app.get('/api', function(req, res) {
        res.json(index);
    });

    app.get('/api/notes', function(req, res) {
        res.json(db.json);
    });

    app.post
}