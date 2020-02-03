const { expect } = require('chai');

const {URL_REGISTER, URL_LOGIN, email, user, regPage, loginPage, confPage, selectors} = require('./register.data');

describe('Register page', () => {
  before(() => {
    browser.url(URL_REGISTER);
  });
  it('should have correct title', () => {
    const actual = browser.getTitle();
    const expected = regPage.title;
    expect(actual).equal(expected);
  });
  it('should have correct header', () => {
    const actual = $(selectors.h1).getText();
    const expected = regPage.h1;
    expect(actual).equal(expected);
  });
  it('should have correct description', () => {
    const actual = $(selectors.description).getText();
    const expected = regPage.description;
    expect(actual).equal(expected);
  });
  it('should have correct button text', () => {
    const actual = $(selectors.submitButton).getText();
    const expected = regPage.buttonText;
    expect(actual).equal(expected);
  });
  it('should fill in first name field', () => {
    const element = $(selectors.firstNameInput);
    element.setValue(user.firstName);
  });
  it('should fill in last name field', () => {
    const element = $(selectors.lastNameInput);
    element.setValue(user.lastName);
  });
  it('should fill phone № field', () => {
    const element = $(selectors.phoneInput);
    element.setValue(user.phone);
  });
  it('should fill email field', () => {
    const element = $(selectors.emailInput);
    element.setValue(email);
  });
  it('should fill password field', () => {
    const element = $(selectors.passwordInput);
    element.setValue(user.password);
  });
  it('should fill about you', () => {
    const element = $(selectors.aboutInput);
    element.setValue(user.about);
  });
  it('should fill goals', () => {
    const element = $(selectors.goalsInput);
    element.setValue(user.goals);
  });
  it('should select English level', () => {
    const element = $(selectors.engLevelInput);
    element.selectByVisibleText(user.engLevel);
  });
  it('should click submit button', () => {
    const element = $(selectors.submitButton);
    element.click();
    browser.pause(2000);
  });
});
describe('Login page', () => {
  it('should have correct title', () => {
    browser.url(URL_LOGIN);
    const actual = browser.getTitle();
    const expected = loginPage.title;
    expect(actual).equal(expected);
  });
  it('should have correct header', () => {
    const actual = $(selectors.h1).getText();
    const expected = loginPage.h1;
    expect(actual).equal(expected);
  });
  it('should fill in email field', () => {
    const element = $(selectors.emailInput);
    element.setValue(email);
  });
  it('should fill in password field', () => {
    const element = $(selectors.passwordInput);
    element.setValue(user.password);
  });
  it('should click login button', () => {
    const element = $(selectors.submitButton);
    element.click();
    browser.pause(1500);
  });
});
describe('Confirmation page', () => {
  it('should have correct title', () => {
    const actual = browser.getTitle();
    const expected = confPage.title;
    expect(actual).equal(expected);
  });
  it('should have correct header', () => {
    const actual = $(selectors.h1).getText();
    const expected = confPage.h1;
    expect(actual).equal(expected);
  });
  it('should have correct first and last name in link', () => {
    const actual = $(selectors.link).getText();
    const expected = `${user.firstName} ${user.lastName}`;
    expect(actual).equal(expected);
    browser.pause(1500);
  });
});
