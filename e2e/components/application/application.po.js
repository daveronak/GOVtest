/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var ApplicationPage = function() {
  this.countryDropdownOptions = element.all(by.css('option'));
  this.countryMissingWarning = element(by.css('#countryMissingWarning'));
  this.countryField = element(by.css('#country'));
  this.nameMissingWarning = element(by.css('#nameMissingWarning'));
  this.nameShortWarning = element(by.css('#nameShortWarning'));
  this.nameField = element(by.css('#name'));
  this.ageField = element(by.css('#age'));
  this.sexButton = element(by.css('#sex-male-button'));
  this.body = element(by.css('body'));
  this.applyButton = element(by.css('#apply-button'));
};

module.exports = new ApplicationPage();

