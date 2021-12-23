
const chance = require('chance').Chance();
const faker = require('faker');
//const { test } = require('ramda');
//const PayeeAddressTab = require ('../pageobjects/PayeeAddressTabPageObjects');
const AddressDetails =require ('../Functions/PayeeAddressTabPageFunctions')
//const Page = require ('../pageobjects/page');

//const page =new Page();
//const payeeAddressTab = new PayeeAddressTab();

let payeeGenerator = chance.string({ length:5, alpha: true, numeric: true, symbols: false })


describe("create payee",()=> {

    const addressDetails = new AddressDetails(payeeGenerator);

    beforeAll(() => {
        browser.deleteAllCookies();
    });

    it ("Fill address tab payee", ()=> {
        addressDetails.fillAddressTab();
        browser.pause(3000);

    });
}); 