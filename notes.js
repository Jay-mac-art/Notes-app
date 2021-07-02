const fs = require("fs");
const chalk = require("chalk");

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.find(function (note) {
    
    return note.title === title;
  });

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const saveNotes = function (notes) {
  const data = JSON.stringify(notes);
  fs.writeFileSync("notes.json", data);
};
const loadNotes = function () {
  try {
    const buffer = fs.readFileSync("notes.json");
    const data = buffer.toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesTokeep = notes.filter((notes)=> notes.title !== title)
    
  
  if (notes.length > notesTokeep.length) {
    console.log(chalk.green.inverse("Node removed"));
    
  }
 else {
    console.log(chalk.red.inverse("No Node removed and exists"));
  }
  saveNotes(notesTokeep);
}

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.inverse('Your notes'))

  notes.forEach((note) => {
      console.log("Title :-", note.title)
      console.log("Body :-",note.body ,"\n")
  })
}
   debugger 
const readNotes = (title) => {
  const notes = loadNotes()
  const note = notes.find((note)=> note.title === title)
  if(note)
  {
      console.log("Title :-", note.title)
      console.log("Body :-",note.body )
  }
  else
  {
    console.log(chalk.red.inverse("No note exists"))
  }
}
module.exports = {

  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
