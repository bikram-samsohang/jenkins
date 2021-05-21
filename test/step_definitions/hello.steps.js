// const { Given, setDefaultTimeout, Then } = require('cucumber');
const { Given, setDefaultTimeout, Then } = require('@cucumber/cucumber');
const URL = require('url');
const Home = require('../pages/home.page');
const { expect } = require('chai');
setDefaultTimeout(60 * 1000);

const home = new Home();

Given("Goto landing page.", async () => {
    try {
        await browser.get(browser.params.baseURL);
    } catch(err) {
        console.log('Error is: ', err);
    }
});

Then('Check page title.', async () => {
    const title = await browser.getTitle();
    expect(title).equals('React App');
});

Then('Check text.', async () => {
    const str = await home.headerText.getText();
    expect(str).equals('This is a test component.');
});