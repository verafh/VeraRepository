const chance = require('chance').Chance();
const faker = require('faker');
const PO = require('../pageobjects/PayeeAddressTabPageObjects');
const Page = require('../pageobjects/page');
const po = new PO();
const page =new Page();


class AddressDetails {
     constructor(payee) {
           this.payee = payee;
       }
  
    fillAddressTab() {
        this.goToIframe();
        this.enterEmail();
        this.enterFirstName();
        this.enterLastName();
        this.enterAddress();
        this.enterCity();
        this.enterZip();
        this.chooseCountry();
        browser.pause(5000);
        this.clickNext();
    }

    goToIframe(){
        page.openIframeArco();
        browser.switchToFrame($('#tipIframe'));
         po.emailAddress.waitForDisplayed(15000);

    }

    enterEmail() {
        const email = faker.internet.email();
        po.emailAddress.addValue(email);
        console.log('Email will be used',email);
    }

    enterFirstName() {
        const name =faker.name.findName();
        po.firstName.addValue(name);
    }

    //enterFirstName() {
       // po.firstName.addValue(faker.name);
    //}



    enterLastName() {
        const name =faker.name.findName();
        po. lastName.addValue(name);
    }

    enterAddress() {
        const address =faker.address.streetName();
        po. address.addValue(address);
    }

    enterCity() {
        const city =faker.address.city();
        po. city.addValue(city);
    }

    enterZip() {
        const zip =faker.address.zipCode();
        po. zip.addValue(zip);
    }

    chooseCountry() {
            po.countrySelector.click();
            po.countrySelector.addValue(this.country);
    
    }


    clickNext() {
        po.nextButton.waitForClickable({ timeout: 20000 });
        po.nextButton.click();
        
    }
}
   




module.exports =  AddressDetails;
