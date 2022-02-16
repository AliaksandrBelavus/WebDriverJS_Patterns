const BasePage = require("../basePage/basePage");
const Element = require("../baseElements/baseElements");

class CountryPage extends BasePage {
  constructor() {
    super();
    this.url = "https://www.apc.com";
    this.USCountry = new Element("xpath", '//a[contains(text(), "United States")]');
  }
  clickUSCountry() {
    return this.USCountry.click();
  }
}

const countryPage = new CountryPage();
module.exports = countryPage;
