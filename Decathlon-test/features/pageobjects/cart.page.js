const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class CartPage extends Page {

 //get btnAddToCart () { return $('//button[@id="AddToCart"]') }
  get btnAddToCart () { return $('//*[@id="Quantity"]//following::button[1]') }
  get btnCheckout () { return $('//button[@name="checkout"][1]') }
  
  async addItemToCart () {
    await (await this.btnAddToCart).click();
    await this.sleepTest(5000);
   //  browser.saveScreenshot("C:\\screenshot\\abc155.png");
    
  }

  async doCheckout () {
    await (await this.btnCheckout).click();
    await this.sleepTest(5000);
    browser.saveScreenshot("C:\\screenshot\\abc166.png");
    
  }
 
}
module.exports = new CartPage();