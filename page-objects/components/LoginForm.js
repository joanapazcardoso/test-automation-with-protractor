const helper = require('protractor-helper')

class LoginFormComponent {
  constructor () {
    this.emailInput = element(by.id('email'))
    this.passwordInput = element(by.id('password'))
    this.loginBtn = element(by.css('button[type="submit"]'))
  }

  login (email = process.env.USER_EMAIL, password = process.env.USER_PASSWORD) {
    helper.clearFieldAndFillItWithText(this.emailInput, email)
    helper.clearFieldAndFillItWithText(this.passwordInput, password)
    helper.click(this.loginBtn)
  }
}

module.exports = LoginFormComponent
