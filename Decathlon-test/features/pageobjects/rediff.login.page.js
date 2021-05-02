
const Page = require('./page');


class RediffLoginPage extends Page {

  get txtEmailAddress () { return $('#identifierId') }
  get btnNextOne () { return $('#identifierNext > div > button > div.VfPpkd-RLmnJb') }
  get txtPassword () { return $('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input') }

  get btnSignIn () { return $('#signin_info > a.signin') }
  get txtUserName () { return $('#login1') }
  get txtPassword1 () { return $('#password') }
  get btnSignIn1 () { return $('//input[@title="Sign in"]') }

  

  async loginRediff () {
    /* await (await this.txtEmailAddress).setValue("ausisure@gmail.com");
     await (await this.btnNextOne).click();
     await (await this.txtPassword).setValue("Testing1!");
     await (await this.btnNextOne).click(); */
    
     await (await this.btnSignIn).click();
     await (await this.txtUserName).setValue("surendra.s1@rediffmail.com");
     await (await this.txtPassword1).setValue("Testing3!");
     await (await this.btnSignIn1).click();
      
     //await this.sleepTest(5000);

     }

     open () {
      return super.launchRediff();
    }
}
module.exports = new RediffLoginPage();