'use strict';

var config = browser.params;

function waitUrl (myUrl) {
  return function () {
    return browser.getCurrentUrl().then(function(url) {
      return myUrl.test(url);
    });
  }
}

describe('Application View', function() {
  var page;

  beforeEach(function() {
    browser.get(config.baseUrl + '/');
    page = require('./application.po');
  });

  it('should retrieve countries from the API', function() {
      expect(page.countryDropdownOptions.count()).toBeGreaterThan(10);
  });

  it('should show a required message when a form field is empty on submit', function() {
    page.nameField.sendKeys('John');

    page.applyButton.click(); // click on submit.

    expect(page.countryMissingWarning.isDisplayed()).toBe(true);
    expect(page.nameMissingWarning.isDisplayed()).toBe(false);
  });

  it('should submit the form and go to the applicationSuccess page', function(){
    page.nameField.sendKeys('John');
    page.sexButton.click();
    page.ageField.sendKeys('33');
    element(by.model('applicationCtrl.newUser.country')).sendKeys('France');

    page.applyButton.click();

    browser.wait(waitUrl(/applicationSuccess/), 10000);

    expect(element(by.css('#user-name')).getText()).toEqual('John');
  });
});
