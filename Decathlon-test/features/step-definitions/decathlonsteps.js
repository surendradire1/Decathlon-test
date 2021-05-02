const { Given, When, Then } = require('@cucumber/cucumber');
const Page = require('../pageobjects/page').default;
const HomePage = require('../pageobjects/home.page');
const CartPage = require('../pageobjects/cart.page');
const PaymentPage = require('../pageobjects/payment.page');
const CreateAccountPage = require('../pageobjects/create.account.page');


Given(/^I am on the Decathlon US site home page$/, async () => {
    await HomePage.launch();
   // await HomePage.NavigateCountrySite("us");

   //var windowHandle = browser.windowHandle();
  // browser.windowHandleMaximize('{' + windowHandle.value + '}');

});

When(/^I search the (.*)$/, async (item) => {
    await HomePage.searchItem(item);
});

When(/^I open the item$/, async () => {
    await HomePage.openItem();
});

When(/^I add the item in the cart$/, async () => {
    await CartPage.addItemToCart();
});

When(/^I do the checkout$/, async () => {
    await CartPage.doCheckout();
});

When(/^I enter payment details and continue for shopping$/, async () => {
    await PaymentPage.enterShippingDetails();
});

When(/^I navigate to payment page$/, async () => {
   // await PaymentPage.continueToPayment();
   // await PaymentPage.btnContinueToShipping();
    
});

Then(/^I verify credit card fields$/, async () => {
    await PaymentPage.verifyCreditCardDetails();
    
});

Then(/^I create the decathlon account$/, async () => {
    await CreateAccountPage.createAccount();
   // await Page.sleepTest(20000);
 });


Then(/^I set the password and activate decathlon account$/, async () => {
    await CreateAccountPage.setPasswordAndActivateAccount();
   // await Page.sleepTest(20000);
 });


