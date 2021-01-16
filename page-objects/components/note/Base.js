class BaseNoteComponent {
  constructor () {
    this.textArea = element(by.id('content'))
    this.fileInput = element(by.id('file'))
    this.submitBtn = element(by.css('button[type="submit"]'))
  }
}

module.exports = BaseNoteComponent
