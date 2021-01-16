const EditNoteFormComponent = require('./components/note/EditNoteForm')

class Note {
  constructor () {
    this.form = new EditNoteFormComponent()
  }
}

module.exports = Note
