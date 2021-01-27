// Setting up dependencies.
let noteData = require('../db/db.json');
const fs = require('fs');
// This is an identifier (universally unique identifier) to assign to a note when it is saved. This will be used for the delete function later.
const { v4: uuidv4 } = require('uuid');

// Creating the function to run on the server.
module.exports = function(app) {

    app.get('/api', function(req, res) {
        res.json(index);
    });

    // Get stored information from "noteData" and return all saved notes as JSON.
    app.get('/api/notes', function(req, res) {
        res.json(noteData);
    });

    // Setting parameters for when a user creates a new note.
    app.post('/api/notes', function(req, res) {
        let note = req.body;
        // Assign the univerally unique id to the note.
        note.id = uuidv4();
        noteData.push(note);
        res.json(note);
        loadDB();
    });

    // Creating the function for when a note is deleted.
    app.delete('/api/notes/:id', function(req, res) {
        let oldNote = req.params.id;
        // loop through note data to isolate and delete the old note.
        for (var i = 0; i < noteData.length; i++) {
            if (oldNote === noteData[i].id) {
                noteData.splice(i, 1);
            }
        }
        // Now send the updated noteData list to the server and re-load the DataBase.
        res.send(noteData);
        loadDB();
    });
}

// Creating the function to load the DB with new "get", "post", or "delete" information from the user.
function loadDB() {
    fs.writeFile('db/db.json', JSON.stringify(noteData), err => {
        if (err) throw err;
        return true;
    });
}