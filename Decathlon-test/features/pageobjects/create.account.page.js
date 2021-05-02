const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class CreateAccountPage extends Page {

   get lnkSignIn () { return $('=Sign In') }
   get lnkCreateAccount () { return $('=CREATE ACCOUNT') }
   get txtFirstName () { return $('#FirstName') }
   get txtLastName () { return $('#LastName') }
   get txtEmail () { return $('#Email') }
   // get btnCreate () { return $('//*[@id="create_customer"]/p[2]/input') }
   get btnCreate () { return $('//input[@value="Create"]') }
   get btnActivateAccount () { return $('//*[@id="//input[@value="Activate Account"]') }
   
   async createAccount (CountrySite) {
     
      await (await this.lnkSignIn).click();
      await (await this.lnkCreateAccount).click();
      await (await this.txtFirstName).setValue("rajesh");
      await (await this.txtLastName).setValue("sharman");
      await (await this.txtEmail).setValue("surendra.s1@rediffmail.com");
      await (await this.btnCreate).click();

      browser.saveScreenshot("C:\\screenshot\\account.png");

    }  

    async setPasswordAndActivateAccount() {

      await (await this.txtPassword).setValue("Testing1!");
      await (await this.txtConfirmPassword).setValue("Testing1!");
      await (await CreateAccountPage.btnActivateAccount).click();
 
      }

   
}
module.exports = new CreateAccountPage();