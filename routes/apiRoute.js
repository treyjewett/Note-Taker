let noteData = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {
    app.get('/api', function(req, res) {
        res.json(index);
    });

    app.get('/api/notes', function(req, res) {
        res.json(noteData);
    });

    app.post('/api/notes', function(req, res) {
        let note = req.body;
        note.id = uuidv4();
        noteData.push(note);
        res.json(note);
        loadDB();
    });

    app.delete('/api/notes/:id', function(req, res) {
        let oldNote = req.params.id;
        // loop through note data to isolate and delete the old note.
        for (var i = 0; i < noteData.length; i++) {
            if (oldNote === noteData[i].id) {
                noteData.splice(i, 1);
            }
        }
        res.send(noteData);
        loadDB();
    });
}

function loadDB() {
    fs.writeFile('db/db.json', JSON.stringify(noteData), err => {
        if (err) throw err;
        return true;
    });
}