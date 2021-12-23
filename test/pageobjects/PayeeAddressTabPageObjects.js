

//const Page = require('./page');

class PayeeAddressTabPO {
    
    get iframe() { return  $('#tipIframe'); }
    get individual() { return  $('input[value="Individual"]'); }
    get CompanyType() { return  $('input[value="Company"]'); }
    get emailAddress() { return  $('#EmailAddress'); }
    get firstName() { return  $('#FirstName'); }
    get lastName() { return  $('#LastName'); }
    get Company() { return  $('#Company'); }
    get address() { return  $('#Address'); }
    get city() { return  $('#City'); }
    get zip() { return  $('#Zip'); }
    get countrySelectorEdit() { return  $('#Country'); }
    get countryOptionsList() { return  $$('.ui-select-choices-row'); }
    get countrySelector() { return  $('#Country input'); } // check 
    get nextButton() { return  $('.action-button next-button bottom-next-button'); }

}
 module.exports = PayeeAddressTabPO;








 
