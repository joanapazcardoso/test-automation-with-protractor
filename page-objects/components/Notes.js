const helper = require('protractor-helper')

class NotesComponent {
  constructor () {
    this.heading = element(by.css('.page-header h1'))
    this.createNewNoteBtn = element(by.css('.list-group a[href="/notes/new"]'))
    this.items = element(by.css('.list-group'))
  }

  openNote (noteText) {
    const noteToOpen = element(by.cssContainingText('.list-group-item', noteText))

    helper.click(noteToOpen)
  }
}

module.exports = NotesComponent
