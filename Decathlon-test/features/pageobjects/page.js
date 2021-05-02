/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
   
    open (path) {
    
        return browser.url('https://www.decathlon.com//${path}')
    }

    launch () {
        //sleepTest(10000)
        return browser.url('https://www.decathlon.com')
       
    }
    launchRediff () {
       // return browser.url('https://www.gmail.com')
        return browser.url('https://www.rediff.com')
    }
    sleepTest(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
      }
      
}