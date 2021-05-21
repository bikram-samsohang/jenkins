class HomePage {
    constructor() {
    //   this.emailInput = element(by.css('#email[name="login_email"]'));
    //   this.nextButton = element(by.id('btnNext'));
    //   this.passwordInput = element(by.id('password'));
    //   this.loginButton = element(by.id('btnLogin'));
    //   this.continueButton = element(by.id('payment-submit-btn'));
    //   this.cancelLink = element(by.linkText('Cancel and return to API Merchant\'s Test Store'));
      this.headerText = element(by.id('test-text'));
      this.reactLink = element(by.linkText('Learn React'));
    }
  }
  
  module.exports = HomePage;
  