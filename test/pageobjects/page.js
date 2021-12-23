/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const chance = require('chance').Chance();
//const PayeeAddressTabPO =require ('../PayeeAddressTabPageObjects');
//const payeeAddressTabPO = new PayeeAddressTabPO();

class Page {
    /**
    * Opens a sub page of the page
    * //param path path of the sub page (e.g. /path/to/page.html)
    */
    openIframeArco() {
         browser.url('https://ui2.dev.payrad.com/demo/iframe?h=orcs.com&idap='+ chance.string({ length:5, alpha: true, numeric: true, symbols: false }));
        

}

}
module.exports = Page;
 