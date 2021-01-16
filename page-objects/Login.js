const BasePage = require('./Base')

const LoginFormCompoent = require('./components/LoginForm')

class LoginPage extends BasePage {
  constructor () {
    super()
    this.relativeUrl = '/login'
    this.form = new LoginFormCompoent()
  }
}

module.exports = LoginPage
