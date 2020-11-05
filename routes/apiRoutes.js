const router = require("express").Router()
const store = require("../db/db.json")


router.get("/notes", (req, res) => {
    // this is the GET route where your will you 
    // will utilize the getNMotes() function
})

router.post("/notes/:id", (req, res) => {
    // this is the POST route where your will you 
    // will utilize the addNotes() function
})

router.delete("/notes/:id", (req, res) => {
    // this is the delete route where you will
    // utilize the removeNote() function
})

module.exports = router