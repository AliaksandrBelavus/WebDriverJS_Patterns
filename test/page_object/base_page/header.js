const Element = require("../base_elements/base_elements");

class Header {
  constructor() {
    this.Support = new Element("xpath", '//*[@id="apc-megamenu"]/li[3]/a');
    this.HowToBuy = new Element("xpath", '//*[@id="apc-megamenu"]/li[4]/a');
    this.ProductSelector = new Element(
      "xpath",
      "//a[contains(text(),'Product Selectors')]"
    );
  }
  clickSupport() {
    return this.Support.click();
  }
  clickProductSelector() {
    return this.ProductSelector.click();
  }
}

module.exports = Header;
