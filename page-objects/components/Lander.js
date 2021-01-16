class LanderComponent {
  constructor () {
    this.self = element(by.css('.Home .lander'))
    this.heading = this.self.element(by.css('h1'))
    this.paragraph = this.self.element(by.css('p'))
    this.loginBtn = this.self.element(by.css('a[href="/login"]'))
    this.signupBtn = this.self.element(by.css('a[href="/signup"]'))
  }
}

module.exports = LanderComponent
