const helper = require('protractor-helper')
const path = require("path")
const absolutePathOfSampleFile = path.resolve(__dirname, '../../../assets/sample.png')

const BaseNoteComponent = require('./Base')

class NewNoteFormComponent extends BaseNoteComponent {
  constructor () {
    super()
  }

  createNote (note) {
    helper.fillFieldWithText(this.textArea, note.initialContent)

    if (note.attachFileOnCreation) {
      helper.uploadFileIntoInputField(this.fileInput, absolutePathOfSampleFile)
    }

    helper.click(this.submitBtn)
  }
}

module.exports = NewNoteFormComponent
