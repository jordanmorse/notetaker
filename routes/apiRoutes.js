const router = require("express").Router()
const notes = require("../db/db.json")
const fs = require("fs")


router.get("/notes", (req, res) => {
    res.json(notes);
})

router.post("/notes", (req, res) => {
    var body = req.body;
    notes.push(body);
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err, data) => {
        if (err) throw (err)
        else {res.json(body)}
    })
})

router.delete("/notes/:id", (req, res) => {
    req.params.id
    //don't use index
    //add ids to db.json and post route
    //once you figure out how you add ids, add to post
    //write a for loop that looks for specfic id
    //if notes[i].id = req.params.id (.splice())
    //write file with new notes
    //res.send(notes)
    //npm package for ids
})

module.exports = router