const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class HomePage extends Page {

   get lnkEnterUSSite () { return $('//*[contains(text(),"Enter U.S. Site")]') }
   get lnkEnterNLSite () { return $('=Enter Netherlands Site') }
   get txtSearch () { return $('#header-search-2_0 > div > form > input') }
   get btnSearch () { return $('#header-search-2_0 > div > form > button') }
   get lnkItemName () { return $('=Kipsta F500, Hybrid Soccer Ball, Size 4') }
   
   async NavigateCountrySite (CountrySite) {
      if(CountrySite==="us"){
          await (await this.lnkEnterUSSite).click();
        }else{
          await (await this.lnkEnterNLSite).click();
        }
        browser.saveScreenshot("C:\\screenshot\\abc14.png");
      }

    async searchItem (item) {
      await (await this.txtSearch).setValue(item);
      await (await this.btnSearch).click();
      //await this.sleepTest(5000);
      }

    async openItem (item) {
      await (await this.lnkItemName).click();
      await this.sleepTest(20000);
      }

      

      open () {
        return super.open();
      }
 
     

}
module.exports = new HomePage();