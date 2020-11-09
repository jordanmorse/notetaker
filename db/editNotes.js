const util = require("util");
const fs = require("fs");

//uuid package for IDs
const {v4: uuidv4} = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//creating an edit notes class with functions necessary to run the app inside
class editNotes {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  //takes notes from db.json file and creates an array
  getNotes() {
    return this.read().then((notes) => {
     
      let cleanedNotes;

      
     try{
        cleanedNotes = [].concat(JSON.parse(notes));
     }catch(err){
        cleanedNotes=[];
     }

      return cleanedNotes;
    })
    
  }

  //function to push new notes with appropriate values into the notes array/creates an ID
  addNote(note) {
    
    const{title, text} = note

    
    if (!title || !text) {
      throw new Error("You need a title and text value.");
    }

    var newId = uuidv4("string");
    console.log(newId)

    const nextNote = {title, text, id: newId}

    return this.getNotes()
    .then(notes => [...notes, nextNote])
    .then(newNoteList => this.write(newNoteList))
    .then(() => nextNote);

  }

  //function to delete notes
    removeNote(id) {
      return this.getNotes()
      .then(notes => notes.filter(note => note.id !== id))
      .then(update => this.write(update))
      .then(console.log("selected note has been removed"))
  }
}

module.exports = new editNotes();