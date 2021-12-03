const expect = require("chai").expect;
const CountryPage = require("../page_object/country_page/country_page");
const HomePage = require("../page_object/home_page/home_page");
const ProductSelectorPage = require("../page_object/productSelectorPage/productSelectorPage");

describe("Home page header", function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  });

  afterEach(function() {
  browser.quit();
  });

  it("Select correct country", async function () {
    await CountryPage.open();
    await CountryPage.wait(2000);
    await CountryPage.clickUSCountry();
    await HomePage.wait(2000);
    const CountryText = await HomePage.CountrySelector.getText();
    expect(CountryText).to.be.equal("UNITED STATES");
  });

  it("Verifying displaying Total Power Draw", async function () {
    await HomePage.open();
    await HomePage.wait(2000);
    await HomePage.Header.clickSupport();
    await HomePage.Header.clickProductSelector();
    await HomePage.wait(2000);
    await ProductSelectorPage.clickUPSSelector();
    await ProductSelectorPage.clickHomeEnvironmentRadio();
    await ProductSelectorPage.clickConfigureByLoadButton();
    await HomePage.wait(2000);
    await ProductSelectorPage.sendKeysTotalPower(100);
    const TotalPowerText = await ProductSelectorPage.TotalPowerLabel.getText();
    expect(TotalPowerText).to.be.equal("100 / 1200 Watts");
  });
});
