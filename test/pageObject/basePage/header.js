const Element = require("../baseElements/baseElements");

class Header {
  constructor() {
    this.supportButton = new Element("xpath", '//*[@id="apc-megamenu"]/li[3]/a');
    this.productSelectorButton = new Element("xpath", "//a[contains(text(),'Product Selectors')]"
    );
  }
  clickSupport() {
    return this.supportButton.click();
  }
  clickProductSelector() {
    return this.productSelectorButton.click();
  }
}

module.exports = Header;
