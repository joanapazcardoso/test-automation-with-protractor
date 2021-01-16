const BasePage = require('./Base')

const LanderComponent = require('./components/Lander')

class Homepage extends BasePage {
  constructor () {
    super()
    this.relativeUrl = '/'
    this.lander = new LanderComponent()
  }
}

module.exports = Homepage
