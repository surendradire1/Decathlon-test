const { Given, When, Then } = require('@cucumber/cucumber');
const Page = require('../pageobjects/page').default;
const HomePage = require('../pageobjects/home.page');
const RediffLoginPage = require('../pageobjects/rediff.login.page');
const RediffInboxPage = require('../pageobjects/rediff.inbox.page');

/*
Given(/^I am on the rediff home page$/, async () => {
  await HomePage.launchRediff();
}); */


Then(/^I go to rediff home page$/, async () => {
    await HomePage.launchRediff();
});

Then(/^I do rediff login$/, async () => {
    await RediffLoginPage.loginRediff();
  });

Then(/^I open the email for activation and click on link for account activation$/, async () => {
    await RediffInboxPage.activateAccount();
});

//setPasswordAndActivateAccount
//And I set the password & activate decathlon account

Then(/^I create decathlon account$/, async () => {
  await RediffInboxPage.activateAccount();
});

