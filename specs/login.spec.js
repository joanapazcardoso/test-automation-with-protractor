const helper = require('protractor-helper')
const protractor = require('protractor')

const LoginPage = require('../page-objects/Login')
const NotesPage = require('../page-objects/Notes')

describe('Login page', () => {
  let loginPage

  beforeEach(() => {
    loginPage = new LoginPage()
    loginPage.visit()
  })

  describe('Login button verifications', () => {
    it('starts disabled', () => {
      helper.waitForElementVisibility(loginPage.form.loginBtn)

      expect(loginPage.form.loginBtn.getAttribute('disabled')).toBeDefined()
    })

    it('is kept disabled when filling only the email field', () => {
      helper.fillFieldWithText(loginPage.form.emailInput, 'test-email@example.com')

      expect(loginPage.form.loginBtn.getAttribute('disabled')).toBeDefined()
    })

    it('is kept disabled when filling only the password field', () => {
      helper.fillFieldWithText(loginPage.form.passwordInput, 'S3creT')

      expect(loginPage.form.loginBtn.getAttribute('disabled')).toBeDefined()
    })
  })

  describe('Errors', () => {
    const TIMEOUT_IN_MS = 5000

    it('fails when trying to login with an invalid password', () => {
      loginPage.form.login(process.env.USER_EMAIL, 'invalid')

      // https://github.com/wlsf82/protractor-helper/issues/114
      browser.wait(protractor.ExpectedConditions.alertIsPresent(), TIMEOUT_IN_MS)

      const alertDialog = browser.switchTo().alert()

      expect(alertDialog.getText()).toEqual('Incorrect username or password.')

      alertDialog.accept()
    })

    it('fails when trying to login with an unnexistent user', () => {
      loginPage.form.login('invalid-user@example.com', 's3cret')

      // https://github.com/wlsf82/protractor-helper/issues/114
      browser.wait(protractor.ExpectedConditions.alertIsPresent(), TIMEOUT_IN_MS)

      const alertDialog = browser.switchTo().alert()

      expect(alertDialog.getText()).toEqual('User does not exist.')

      alertDialog.accept()
    })
  })

  it('logs in and out successfully', () => {
    const notesPage = new NotesPage()

    loginPage.form.login()

    helper.waitForElementVisibility(notesPage.navbar.logoutLink)
    helper.waitForTextToBePresentInElement(notesPage.self.heading, 'Your Notes')
    helper.waitForElementVisibility(notesPage.self.createNewNoteBtn)

    // Logout
    helper.click(notesPage.navbar.logoutLink)
    helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}/login`)
  })
})
