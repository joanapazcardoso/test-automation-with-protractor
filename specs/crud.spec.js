const faker = require('faker')
const helper = require('protractor-helper')

const LoginPage = require('../page-objects/Login')
const NewNotePage = require('../page-objects/NewNote')
const NotePage = require('../page-objects/Note')
const NotesPage = require('../page-objects/Notes')

// Use this mechanism to test your test against flakiness
// Array(3).fill().forEach(() => {
describe('CRUD', () => {
  let loginPage
  let newNotePage
  let notePage
  let notesPage

  beforeAll(() => {
    loginPage = new LoginPage()
    newNotePage = new NewNotePage()
    notePage = new NotePage()
    notesPage = new NotesPage()

    loginPage.visit()
    loginPage.form.login()
    helper.waitForTextToBePresentInElement(notesPage.self.heading, 'Your Notes')
  })

  it('creates, reads, edits, and deletes a note successfully', () => {
    const note = {
      initialContent: faker.random.words(5),
      updatedContent: faker.random.words(6),
      attachFileOnCreation: true
    }

    // Create Note
    helper.click(notesPage.self.createNewNoteBtn)
    newNotePage.form.createNote(note)

    // Assert that note was created
    helper.waitForTextToBePresentInElement(notesPage.self.items, note.initialContent)

    // Edit note
    notesPage.self.openNote(note.initialContent)
    notePage.form.editNote(note)

    // Assert that note was updated
    helper.waitForTextNotToBePresentInElement(notesPage.self.items, note.initialContent)
    helper.waitForTextToBePresentInElement(notesPage.self.items, note.updatedContent)

    // Delete note
    notesPage.self.openNote(note.updatedContent)
    notePage.form.deleteNote(note)

    // Assert that note was deleted
    helper.waitForTextNotToBePresentInElement(notesPage.self.items, note.updatedContent)

    // Logout
    helper.click(notesPage.navbar.logoutLink)
    helper.waitForElementVisibility(notesPage.navbar.loginLink)
  })
})
// })
