const BasePage = require('./Base')

const NotesComponent = require('./components/Notes')

class NotesPage extends BasePage {
  constructor () {
    super()
    this.relativeUrl = '/'
    this.self = new NotesComponent()
  }
}

module.exports = NotesPage
