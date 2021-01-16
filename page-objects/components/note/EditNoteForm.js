
const helper = require('protractor-helper')
const protractor = require('protractor')

const BaseNoteComponent = require('./Base')

class EditNoteFormComponent extends BaseNoteComponent {
  constructor () {
    super()
    this.deleteBtn = element(by.css('.btn-danger'))
  }

  editNote (note) {
    helper.clearFieldAndFillItWithText(this.textArea, note.updatedContent)
    helper.click(this.submitBtn)
  }

  deleteNote () {
    helper.click(this.deleteBtn)

    // https://github.com/wlsf82/protractor-helper/issues/114
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 5000)

    const alertDialog = browser.switchTo().alert()

    expect(alertDialog.getText()).toEqual('Are you sure you want to delete this note?')
    alertDialog.accept()
  }
}

module.exports = EditNoteFormComponent
