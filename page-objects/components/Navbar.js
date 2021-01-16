class NavbarComponent {
  constructor () {
    this.self = element(by.css('.navbar'))
    this.brand = this.self.element(by.css('.navbar-header .navbar-brand[href="/"]'))
    this.signupLink = this.self.element(by.css('.navbar-right a[href="/signup"]'))
    this.loginLink = this.self.element(by.css('.navbar-right a[href="/login"]'))
    this.settingsLink = this.self.element(by.css('.navbar-right a[href="/settings"]'))
    this.logoutLink = this.self.element(by.css('.navbar-right a[href="#"]'))
    this.toggleBtn = this.self.element(by.css('.navbar-toggle'))
  }
}

module.exports = NavbarComponent
