const BasePage = require('./Base')

const NewNoteFormComponent = require('./components/note/NewNoteForm')

class NewNotePage extends BasePage {
  constructor () {
    super()
    this.relativeUrl = '/notes/new'
    this.form = new NewNoteFormComponent()
  }
}

module.exports = NewNotePage
