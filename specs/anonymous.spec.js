const helper = require('protractor-helper')

const HomePage = require('../page-objects/Home')

describe('HomePage as an anonymous user', () => {
  let homePage

  beforeEach(() => {
    homePage = new HomePage()
    homePage.visit()
  })

  it('renders a navbar with links; and a heading, a paragraph, and two buttons, in the main page', () => {
    const scrath = 'Scratch'
    const login = 'Login'
    const signup = 'Signup'
    const paragraph = 'A simple note taking app'

    helper.waitForElementVisibility(homePage.navbar.self)
    helper.waitForTextToBePresentInElement(homePage.navbar.brand, scrath)
    helper.waitForTextToBePresentInElement(homePage.navbar.signupLink, signup)
    helper.waitForTextToBePresentInElement(homePage.navbar.loginLink, login)
    helper.waitForTextToBePresentInElement(homePage.lander.heading, scrath)
    helper.waitForTextToBePresentInElement(homePage.lander.paragraph, paragraph)
    helper.waitForTextToBePresentInElement(homePage.lander.loginBtn, login)
    helper.waitForTextToBePresentInElement(homePage.lander.signupBtn, signup)
  })
})
