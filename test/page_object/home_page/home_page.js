const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_elements");

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = "https://www.apc.com/us/en";
    this.CountrySelector = new Element(
      "css",
      "div.sdl-header-apc_lang-selector > a > span:nth-child(2)"
    );
  }
  open() {
    return super.open(this.url);
  }
}

module.exports = new HomePage();
