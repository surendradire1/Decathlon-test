
const Page = require('./page');
const CreateAccountPage = require('../pageobjects/create.account.page');


class RediffInboxPage extends Page {

  get lnkActivationEmail () { return $('//span[@title="Activate Your New Decathlon Account"]') }
  get btnActivation () { return $('=Activate your account') }
  get txtPassword () { return $('#CustomerPassword') }
  get txtConfirmPassword () { return $('#CustomerPasswordConfirmation') }
 

  async activateAccount () {
    //browser.saveScreenshot("C:\\screenshot\\account1.png");
     await (await this.lnkActivationEmail).click();
     await (await this.btnActivation).click();
   //await this.sleepTest(5000);
   browser.switchWindow('Create Account | Decathlon')
  }
     
}
module.exports = new RediffInboxPage();