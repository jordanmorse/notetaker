const router = require("express").Router()
const db = require("../db/db.json")
const fs = require("fs")
const {v4: uuidv4} = require("uuid")
const edit = require("../db/editNotes.js")

//running the function to get notes, option for error as well
router.get("/notes", (req, res) => {
   edit
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})

//running the function for posting a new note
router.post("/notes", (req, res) => {
    edit
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
})

//running the function to remove a selected note. note deletes on page refresh
router.delete("/notes/:id", (req, res) => {
    edit
    .removeNote(req.params.id)
})

module.exports = router