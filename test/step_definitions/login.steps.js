// const { Given, setDefaultTimeout, Then } = require('cucumber');
const { Given, setDefaultTimeout, Then } = require('@cucumber/cucumber');
const URL = require('url');
const Login = require('../pages/login.page');
const { expect } = require('chai');
setDefaultTimeout(60 * 1000);

const login = new Login();

Given("Goto login page.", async () => {
    try {
        await browser.get(browser.params.baseURL);
    } catch(err) {
        console.log('Error is: ', err);
    }
});

Then('Check username.', async () => {
    // const title = await login..getTitle();
    // const exist = expect(login.username).exist;
    login.username.sendKeys('test-user');
    // const user = await login.username.getAttribute('value');
    await browser.sleep(3000);
    // expect(user).equals('test-user');
});

Then('Check password.', async () => {
    // const str = await login.headerText.getText();
    // expect(str).equals('This is a test component.');
    // const exist = expect(login.username).exist;
    // login.password.sendKeys('test-password');
    // const pass = await login.password.getAttribute('value');
    // await browser.sleep(3000);
    // expect(pass).equals('test-userkk');
});