class LoginPage {
    constructor() {
      this.username = element(by.name('username'));
      this.password = element(by.name('password'));
    }
  }
  
  module.exports = LoginPage;
  