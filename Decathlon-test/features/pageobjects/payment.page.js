const Page = require('./page');
const expectChai = require('chai').expect;

/**
 * sub page containing specific selectors and methods for a specific page
 */

class PaymentPage extends Page {

  get txtEmail () { return $('#checkout_email') }
  get txtFirstName () { return $('#checkout_shipping_address_first_name') }
  get txtLastName () { return $('#checkout_shipping_address_last_name') }
  get txtAdress () { return $('#checkout_shipping_address_address1') }
  get txtCity () { return $('#checkout_shipping_address_city') }
  get ddState () { return $('#checkout_shipping_address_province') }
  get txtZipCode () { return $('#checkout_shipping_address_zip') }
  get txtPhoneNo () { return $('#checkout_shipping_address_phone') }
  get btnContinueToShipping () { return $('#continue_button') }
  //get btnContinueToPayment () { return $('#continue_button > span') }
  //get btnContinueToPayment () { return $('//*[@id="continue_button"]') }
  get btnContinueToPayment () { return $('//*[text()="Continue to payment"]') }
 
  get lblCreditCard () { return $('//label[@for="checkout_payment_gateway_37830852670"]') }
  lblCreditCard1 = $('//label[@for="checkout_payment_gateway_37830852670"]')

  get txtCardNumber () { return $('#number') }
  get txtNameOnTheCard () { return $('#name') }
  get txtExpiry () { return $('#expiry') }
  get txtSecurityCode () { return $('##verification_value') }
 
 
  async enterShippingDetails () {
    await (await this.txtEmail).setValue("surendraqa10@gmail.com");
    await (await this.txtFirstName).setValue("surendra");
    await (await this.txtLastName).setValue("singh");
    await (await this.txtAdress).setValue("25737 US Rt 11");
    await (await this.txtCity).setValue("city");
    await (await this.ddState).selectByAttribute('value', "FL");
    await (await this.txtZipCode).setValue("32303");
    await (await this.txtPhoneNo).setValue("0633462407");

    await this.sleepTest(5000);
    await (await this.btnContinueToShipping).click();

     browser.saveScreenshot("C:\\screenshot\\abc153.png");
  }
   async continueToShipping () {
    await (await this.btnContinueToShipping).click();
    await this.sleepTest(20000);
   }

   async continueToPayment () {
    await this.sleepTest(10000);
   // await (await this.btnContinueToPayment).click();
  //  await this.sleepTest(5000);
   }
    
   async verifyCreditCardDetails () {
    
    console.log("Start ==============");
    /*var test = lblCreditCard1.getAttribute('placeholder');
    console.log(test);
    expectChai(lblCreditCard.data('placeholder')).to.include('Credit');
    const cc = (await this.lblCreditCard).getAttribute('placeholder');

    var value = await browser.getValue('#input');
    console.log(value); // outputs: some value

   var value1 = await browser.getValue('#input'); 
   var value3 = await browser.getValue('$('//label[@for="checkout_payment_gateway_37830852670"]'));*/
     
    console.log("End=======================");
    const cn = await this.txtCardNumber.getAttribute('placeholder');
    console.log(cn);

    const nodc = await this.txtNameOnTheCard.getAttribute('placeholder');
    console.log(nodc);

    const expiry = await this.txtExpiry.getAttribute('placeholder');
    console.log(expiry);

    const seccode = await this.txtSecurityCode.getAttribute('placeholder');
    console.log(seccode);

  }

}
module.exports = new PaymentPage();