const helper = require('protractor-helper')

const HomePage = require('../page-objects/Home')
const LoginPage = require('../page-objects/Login')
const NotesPage = require('../page-objects/Notes')

describe('Mobile viewport', () => {
  let homePage

  beforeAll(() => {
    const width = 375
    const height = 667

    homePage = new HomePage()
    browser.driver.manage().window().setSize(width, height)
  })

  describe('Anonymous', () => {
    beforeAll(() => homePage.visit())

    it('correctly shows (and hides) elements when toggling/untoggling the navbar', () => {
      helper.waitForElementVisibility(homePage.navbar.toggleBtn)

      expect(homePage.navbar.toggleBtn.getAttribute('class')).toContain('collapsed')

      helper.click(homePage.navbar.toggleBtn)

      expect(homePage.navbar.toggleBtn.getAttribute('class')).not.toContain('collapsed')
      helper.waitForElementVisibility(homePage.navbar.signupLink)
      helper.waitForElementVisibility(homePage.navbar.loginLink)

      helper.click(homePage.navbar.toggleBtn)

      expect(homePage.navbar.toggleBtn.getAttribute('class')).toContain('collapsed')
    })
  })

  describe('Logged in', () => {
    let notesPage

    beforeAll(() => {
      const loginPage = new LoginPage()
      notesPage = new NotesPage()

      loginPage.visit()
      loginPage.form.login()

      helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}/`)
      helper.waitForTextToBePresentInElement(notesPage.self.heading, 'Your Notes')
    })

    it('correctly shows (and hides) elements when toggling/untoggling the navbar', () => {
      helper.waitForElementVisibility(notesPage.navbar.toggleBtn)
      helper.waitForElementVisibility(notesPage.self.createNewNoteBtn)

      // It arrives with collapsed navbar
      expect(notesPage.navbar.toggleBtn.getAttribute('class')).toContain('collapsed')

      // Toggles navbar
      helper.click(notesPage.navbar.toggleBtn)

      // It displays logged in links
      expect(notesPage.navbar.toggleBtn.getAttribute('class')).not.toContain('collapsed')
      helper.waitForElementVisibility(notesPage.navbar.settingsLink)
      helper.waitForElementVisibility(notesPage.navbar.logoutLink)

      // Toggles navbar
      helper.click(notesPage.navbar.toggleBtn)

      // It collapses the navbar
      expect(notesPage.navbar.toggleBtn.getAttribute('class')).toContain('collapsed')

      // Logout
      helper.click(notesPage.navbar.toggleBtn)
      helper.click(notesPage.navbar.logoutLink)
      helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}/login`, 10000)

      // Maximize screen
      browser.driver.manage().window().maximize()
    })
  })
})
