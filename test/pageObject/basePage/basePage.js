const Header = require("./header");

class BasePage {
  constructor() {
    this.Header = new Header();
  }
  open(url) {
    return browser.get(url);
  }
}

module.exports = BasePage;
