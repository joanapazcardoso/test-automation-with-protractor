const NavBarComponent = require('./components/Navbar')

class BasePage {
  constructor () {
    this.navbar = new NavBarComponent()
  }

  visit () {
    browser.get(this.relativeUrl)
  }
}

module.exports = BasePage
