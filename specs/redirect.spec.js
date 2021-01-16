const helper = require('protractor-helper')

const LoginPage = require('../page-objects/Login')
const NewNotePage = require('../page-objects/NewNote')

describe('Redirect', () => {
  let loginPage
  let newNotePage

  beforeEach(() => {
    loginPage = new LoginPage()
    newNotePage = new NewNotePage()
    newNotePage.visit()
  })

  it('corretly redirects after login', () => {
    loginPage.form.login()

    helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}${newNotePage.relativeUrl}`)
    helper.waitForElementVisibility(newNotePage.form.submitBtn)

    // Logout
    helper.click(newNotePage.navbar.logoutLink)
    helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}/login`)
  })
})
